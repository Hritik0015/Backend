const mongoose = require('mongoose');

const categorySchema= new mongoose.Schema({
    category: {
        type:String,
        required:true
    },
    image:{
        type:String
    }

},{timestamps:true});

module.exports=mongoose.model('Category',categorySchema);