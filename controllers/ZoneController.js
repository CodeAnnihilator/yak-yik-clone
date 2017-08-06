var Zone = require('../models/Zone')

module.exports = {
  find: function(params, callback) {
    Zone.find(params, function(err, zones) {
      if (err) return callback(err, null)
      callback(null, zones)
    })
  },

  findById: function(id, callback) {
    Zone.findById(id, function(err, zone) {
      if (err) return callback(err, null)
      callback(null, zone)
    })
  },

  create: function(params, callback) {
    Zone.create(params, function(err, zone) {
      if (err) return callback(err, null)
      callback(null, zone)
    })
  },

  update: function(id, params, callback) {
    Zone.findByIdAndUpdate(id, params, { new: true }, function(err, zone) {
      if (err) return callback(err, null)
      callback(null, zone)
    })
  },

  delete: function(id, callback) {
    Zone.findByIdAndRemove(id, function(err) {
      if (err) return callback(err, null)
      callback(null, null)
    })
  }
}
