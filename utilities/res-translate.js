/* eslint-disable no-console*/
const json5 = require('json5');
const fs = require('fs');
const request = require('request');
const parseString = require('xml2js').parseString;

const resourceLocations = ['../client/i18n/'];

let data = [{
  lang: 'en-US'
}, {
  lang: 'fr-FR'
}];

let sources = {};

let tasks = {};
const master = 0;

let masterTree = {};

launchResourceTranslation();

function launchResourceTranslation(locIndex = 0) {
  for (let langIndex = 0; langIndex < data.length; langIndex++) {
    data[langIndex].texts = {};
    data[langIndex].modified = false;
  }

  sources = {};
  tasks = {};

  loadResources(() => {
    prepareTasks();
    executeTasks(() => {
      dumpResources(() => {
        if (locIndex < resourceLocations.length - 1) {
          launchResourceTranslation(++locIndex);
        }
      });
    });
  });
}

function loadResources(callback, langIndex = 0) {
  fs.readFile(`../client/i18n/${data[langIndex].lang}/app.js`, (err, obj) => {
    if (!err) {
      obj = obj.toString();
      obj = json5.parse(obj.substring(obj.indexOf('{'), obj.lastIndexOf('}') + 1));

      if (langIndex === 0) {
        masterTree = JSON.parse(JSON.stringify(obj));
      }

      prepareData(langIndex, obj);

      if (master === undefined || langIndex === master) {
        for (const text in data[langIndex].texts) {
          if (langIndex === master || sources.hasOwnProperty(text) === false) {
            sources[text] = langIndex;
          }
        }
      }

      for (let li = 0; li < data.length; li++) {
        if (li !== langIndex) {
          tasks[langIndex.toString() + li] = {
            from: langIndex,
            to: li,
            texts: [],
            keys: []
          };
        }
      }
    } else {
      console.error(err);
    }

    if (langIndex === data.length - 1) {
      return callback();
    }

    loadResources(callback, ++langIndex);
  });
}

const prepareData = (langIndex, obj, position = '') => {
  for (const i in obj) {
    if (typeof obj[i] === 'object') {
      prepareData(langIndex, obj[i], position + i + '.');
    } else {
      data[langIndex].texts[position + i] = obj[i];
    }
  }
};

function prepareTasks() {
  for (let langIndex = 0; langIndex < data.length; langIndex++) {
    if (langIndex === master) {
      // eslint-disable-next-line no-continue
      continue;
    }

    for (const src in sources) {
      if (data[langIndex].texts.hasOwnProperty(src) === false) {
        data[langIndex].modified = true;
        tasks[sources[src] + langIndex.toString()].texts.push(data[sources[src]].texts[src]);
        tasks[sources[src] + langIndex.toString()].keys.push(src);
      }
    }

    // Remove any extra keys (relative to master) from all locales
    if (master !== undefined) {
      const srcKeys = Object.keys(sources);

      Object.keys(data[langIndex].texts).filter(x => !srcKeys.includes(x)).forEach(key => {
        data[langIndex].modified = true;
        delete data[langIndex].texts[key];
      });
    }
  }
}

function executeTasks(callback) {
  let count = Object.keys(tasks).length;

  for (const task in tasks) {
    executeTask(tasks[task], () => {
      count--;

      if (count === 0) {
        return callback();
      }
    });
  }
}

function executeTask(task, callback) {
  translateArray(task.texts, data[task.from].lang, data[task.to].lang, arr => {
    for (let i = 0; i < arr.length; i++) {
      data[task.to].texts[task.keys[i]] = arr[i];
    }

    return callback();
  });
}

function dumpResources(callback) {
  data = data.filter(x => x.modified === true);

  let count = data.length;

  if (count === 0) {
    return callback();
  }

  for (const langIndex in data) {
    delete data[langIndex].modified;

    for (const i in data[langIndex].texts) {
      let temp = masterTree;

      const k = i.split('.');

      for (let j = 0; j < k.length; j++) {
        if (j === k.length - 1) {
          temp[k[j]] = data[langIndex].texts[i];
        }

        temp = temp[k[j]];
      }
    }

    fs.readFile(`../client/i18n/${data[langIndex].lang}/app.js`, (err, obj) => {
      if (!err) {
        obj = obj.toString();

        /* eslint-disable-next-line no-useless-escape*/
        obj = obj.replace(obj.substring(obj.indexOf('{'), obj.lastIndexOf('}') + 1)
          , json5.stringify(masterTree, { space: 2, quote: '\'' }));

        fs.writeFile(`../client/i18n/${data[langIndex].lang}/app.js`, obj, () => {
          count--;

          console.log('Updated ' + data[langIndex].lang);

          if (count === 0) {
            return callback();
          }
        });
      }
    });
  }
}

function translateArray(arr, fromLang, toLang, callback) {
  if (arr.length === 0) {
    return callback([]);
  }

  fromLang = fromLang.split('-')[0];
  toLang = toLang.split('-')[0];

  request.post({
    url: 'http://api.microsofttranslator.com/V2/Http.svc/TranslateArray',
    headers: {
      'Content-Type': 'application/json',
      // cspell:disable-next-line
      'Ocp-Apim-Subscription-Key': 'f4382a6fbb9f4586a224f6dcb390319e'
    },
    json: {
      From: fromLang,
      To: toLang,
      Texts: arr,
      AppId: ''
    }
  }, (err, res, body) => {
    parseString(body, (err, result) => {
      try {
        return callback(result.ArrayOfTranslateArrayResponse.TranslateArrayResponse.map(x => x.TranslatedText[0]));
      } catch (e) {
        console.error('Failed while translating from ' + fromLang + ' to ' + toLang, arr, e, body);
      }
    });
  });
}