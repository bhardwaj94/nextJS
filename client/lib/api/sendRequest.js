/* eslint-disable no-console */
import 'isomorphic-unfetch';
import { SESSION_WARNING_TIME_IN_SECONDS } from '../../constants/constants';
import store from '../../redux/store/store';
import { ShowSessionWarningAction } from '../../redux/actions/Users/ShowSessionWarningAction';
import { ShowLoaderAction, RemoveLoaderAction } from '../../redux/actions/Loader/LoaderShowAction';

const sessionInfo = {
  expiry: 0,
  lastTimeout: null
};

export default function sendRequest(path, opts = {}, hideLoader = false) {
  return new Promise(async (resolve, reject) => {
    const headers = Object.assign({}, opts.headers || {}, {
      'Content-type': 'application/json; charset=UTF-8',
      'Cache-Control': 'no-cache',
      'Pragma': 'no-cache'
    });

    let response;

    try {
      window.document.body.classList.add('horizontal-scroll');

      if (!hideLoader) {
        store.dispatch(ShowLoaderAction(1));
      }

      response = await fetch(
        `${window.location.origin}${path}`,
        Object.assign({ method: 'POST', credentials: 'same-origin' }, opts, { headers }),
      );
    } catch (error) {
      if (error.message !== 'window is not defined') {
        console.error(error.message, path, error);
      }
    }

    if (!hideLoader) {
      store.dispatch(RemoveLoaderAction(1));
    }

    if (!response) {
      return reject('SESSION_EXPIRED');
    }

    const expiry = response.headers.get('expiry');

    if (expiry) {
      sessionInfo.expiry = parseInt(expiry);

      if (sessionInfo.lastTimeout) {
        clearTimeout(sessionInfo.lastTimeout);
      }

      sessionInfo.lastTimeout = setTimeout(() => {
        store.dispatch(ShowSessionWarningAction(true));
      }, ((sessionInfo.expiry * 1000) - (SESSION_WARNING_TIME_IN_SECONDS * 1000)));
    }

    const contentType = response.headers.get('Content-type');

    if (contentType === 'text/csv; charset=UTF-8') {
      response.blob().then(data => {
        const a = document.createElement('a');

        a.href = URL.createObjectURL(data);
        const fileName = `${response.url.split('\\').pop()}`;

        a.setAttribute('download', fileName);
        a.click();
      }).catch(() => {
      });
    }
    else {
      return response.json().then(data => resolve(data)).catch(err => console.error(path, err));
    }

    if (response.status >= 400) {
      return response.json().then(data => {
        if (data.err.errorCode === 'UNKNOWN_ERROR') {
          console.error(data.err.errorDetails);
        }

        return reject(data.err.errorCode);
      }).catch(err => console.error(path, err));
    }
  });
}
