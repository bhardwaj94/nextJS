const mongoose = require('mongoose');
const BaseClass = require('./BaseClass');

const {
  Schema
} = mongoose;

const mongoSchema = new Schema({
  userId: {
    type: String,
    trim: true
  },

  method: {
    type: String,
    required: true,
    trim: true
  },

  parameter: {
    type: Object,
    trim: true
  },

  target: [{
    type: String,
    trim: true
  }],

  dateTime: {
    type: String,
    required: true,
    trim: true
  },

  remark: {
    type: String,
    trim: true
  }
}, { timestamps: true });

class AuditClass extends BaseClass {

}

mongoSchema.loadClass(AuditClass);

const Audit = mongoose.model('Audit', mongoSchema);

module.exports = Audit;