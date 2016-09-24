var mongoose = require('mongoose');
var todo = mongoose.model('Todo', {
              name: String,
			  email:String
			  
          });

exports.todo = todo;
