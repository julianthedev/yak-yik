//you can use this file with other projects. MODULARITY.
//you want to make highly independent pieces of code.
// you dont want spaghetti code that is independent on eachother.
var Zone = require('../models/Zone')

module.exports={//this handles all the general requests GET PUT POST

  find: function(params, callback){
    Zone.find(params, function(err, zones){
      if(err){    //it is conventional to handle the error first
        callback(err, null)
        return
      }
      callback(null, zones) //zones = this is the desired data
    })
  },

  findById: function(id, callback){
    Zone.findById(id, function(err, zone){
      if(err){
        callback(err, null)
        return
      }
      callback(null, zone)
    })
  },

  create: function(params, callback){
    //FORMATTING DATA FOR ZIPCODES SO THEY ARE SEPERATE ITEMS IN AN ARRAY
    var zips = params['zipCodes']
    var zip = zips.split(',')
    var newZips = []
    zip.forEach(function(zipCode){
      newZips.push(zipCode.trim()) //checking for no extra spaces
      //HERE YOU ADD MORE EDGE CASES FOR ZIPCODE ENTRY --> Data testing
      // EXAMPLES: Empty strings, double spaces with commas, hyphenated zips etc.
    })
    params['zipCodes'] = newZips
    //END ZIPCODE FORMATTING

    Zone.create(params, function(err, zone){
        if(err){
          callback(err, null)
          return
        }
        callback(null, zone)
    })
  },

  update: function(id, params, callback){
    Zone.findByIdAndUpdate(id, params, {new:true}, function(err, zone){
      if(err){
        callback(err, null)
        return
      }
      callback(null, zone)
    })
  },

  delete: function(id, callback){
    Zone.findByIdAndRemove(id, function(err){
      if(err){
        callback(err, null)
        return
      }
      callback(null, null)
    })
  },

  }
