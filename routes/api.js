var express = require('express');
var router = express.Router();
var ZoneController = require('../controllers/ZoneController')
var controllers = require('../controllers')//index is default if not specified

router.get('/:resource', function(req, res, next) {

  var resource = req.params.resource
  var controller = controllers[resource] //grabbing the controller that corresponds to the resource name located in the index.js file
  if(controller == null){
    res.json({
      confirmation: 'fail',
      message: 'Invalid Resource request: '+resource
    })
    return
  }
  controller.find(req.query, function(err, results){
    if(err){
      res.json({ //this whole thing is the error call back. thats why the error handle looks diff than controller.
        confirmation: 'fail',
        message: err
      })
      return
    }
    res.json({
        confirmation: 'success',
        results: results
    })
  })
})


router.get('/:resource/:id', function(req, res, next) {
  var resource=req.params.resource
  var id=req.params.id

  var resource = req.params.resource
  var controller = controllers[resource] //grabbing the controller that corresponds to the resource name located in the index.js file
  if(controller == null){
    res.json({
      confirmation: 'fail',
      message: 'Invalid Resource request: '+resource
    })
    return
  }

    controller.findById(id, function(err, result){
      if(err){
        res.json({
          confirmation: 'fail',
          message: 'not found'
        })
        return
      }
      res.json({
        confirmation: 'success',
        result: result
      })
    })
  })

router.post('/:resource', function(req, res, next){
  var resource = req.params.resource
  var resource = req.params.resource
  var controller = controllers[resource] //grabbing the controller that corresponds to the resource name located in the index.js file
  if(controller == null){
    res.json({
      confirmation: 'fail',
      message: 'Invalid Resource request: '+resource
    })
    return
  }
    controller.create(req.body, function(err, result){ //req.body is the package from the form
      if(err){
        res.json({
          confirmation:'fail',
          message: err
        })
        return
      }
      res.json({
        confirmation: 'succcess',
        result: result
      })
    })
})

module.exports = router
