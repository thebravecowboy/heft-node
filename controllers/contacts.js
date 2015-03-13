/**
 * Created by btm on 3/13/15.
 */
 var models = require('../app/models'),
  md5 = require('MD5');

module.exports = {
  index: function(request, response) {
    models.Contact.find({}, function(error, data) {
      response.json(data);
    });
  },
  'getById': function(request, response) {

  },
  'add': function(request, response) {

  },
  'delete': function(request, response) {

  }
};