const mongoose  = require('mongoose');

const userSchema = new mongoose.Schema({

    username:{
        type:String,
        required:true,
        uniqe:true,
    },

  email:{
         type:String,
         required:true,
          uniqe:true,
        },

         password:{
            type:String,
             required:true,
              uniqe:true,
          },

          role:{
            type:String,
            enum:['user', 'artist'],
            default:'user',
          }




})
          const userModel = mongoose.model('user',userSchema );


          module.exports = userModel;
