const mongoose = require('mongoose');
const { Schema } = mongoose;


const UserSchema = new Schema({
    name:{
            type: String,
            required: true,
         }, 
         email:{
            type: String,
            required: true,
            unique : true
         },

         class:{
            type: String,
            required: true,
         }, 
         rollno:{
            type: Number,
            required: true,
            unique : true
         }

  });
  module.exports=mongoose.model('userr',UserSchema)