//Require Mongoose 
const mongoose = require('mongoose');
//Define a Schema
const Schema = mongoose.Schema;
// Create User Schema
const UserSchema = new mongoose.Schema({   
      user: { 
        type: String,
        required: true, 
        minlength : 2,     
        maxlength: 20,
        trim: true   
      },
      pw: { 
        type: String,
        required: true  
      },
      email: {
        type: String,
        required: true
      },
      status: {
        type: Number,
        default: 0
      }
    },
    { 
      collection: 'users'
    }
);
// Create Post Schema
/* const PostSchema = new mongoose.Schema({    
      title: String,    
      postedBy: {        
         type: mongoose.Schema.Types.ObjectId,        
         ref: 'User'    
      },    
      comments: [{        
         text: String,        
         postedBy: {            
           type: mongoose.Schema.Types.ObjectId,            
           ref: 'User'        
         }    
      }]
});

*/
// We then need to create models to use it
module.exports = mongoose.model("User", UserSchema);
//module.exports = mongoose.model("Post", PostSchema);