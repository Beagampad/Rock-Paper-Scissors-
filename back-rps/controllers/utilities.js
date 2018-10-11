var rn = require('random-number');

var controller = {
  
    randomnumber: function(req,res){//generate random number

        let options = {
            min:  0
          , max:  2
          , integer: true
          }
          return res.send({result: rn(options)});
    },
}

module.exports = controller;