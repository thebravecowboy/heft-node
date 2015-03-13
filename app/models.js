/**
 * Created by btm on 3/13/15.
 */

var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

var Contact = new Schema({
  email: {
    type: String
  },
  name: {
    first: {
      type: String
    },
    last: {
      type: String
    }
  },
  phone: {
    type: String
  }
});

module.exports = {
  Contact: mongoose.model('Contact', Contact)
};
