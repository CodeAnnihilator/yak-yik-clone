var express = require('express')
var router = express.Router()
var ZoneController = require('../controllers/ZoneController')
var controllers = require('../controllers')

router.get('/:resource', function(req, res, next) {
  var resource = req.params.resource
  var controller = controllers[resource]
  if (controller == null) return res.json({
    confirmation: 'fail',
    message: `Invalid Resource Request: ${resource}`
  })
  controller.find(req.query, function(err, results) {
    if (err) return res.json({
      confirmation: 'fail',
      message: err
    })
    res.json({
      confirmation: 'success',
      results: results
    })
  })
})

router.post('/:resource', function(req, res, next) {
  var resource = req.params.resource
  var controller = controllers[resource]
  if (controller == null) return res.json({
    confirmation: 'fail',
    message: `Invalid Resource Request: ${resource}`
  })
  controller.create(req.body, function(err, result) {
    if (err) {
      return res.json({
        confirmation: 'fail',
        message: err
      })
    }
    res.json({
      confirmation: 'success',
      result: result
    })
  })
})

router.get('/:resource/:id', function(req, res, next) {
  var resource = req.params.resource
  var id = req.params.id
  var controller = controllers[resource]
  if (controller == null) return res.json({
    confirmation: 'fail',
    message: `Invalid Resource Request: ${resource}`
  })
  controller.findById(id, function(err, result) {
    if (err) return res.json({
      confirmation: 'fail',
      message: 'Not found'
    })
    res.json({
      confirmation: 'success',
      result: result
    })
  })
})

module.exports = router
