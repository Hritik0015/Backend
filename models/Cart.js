const mongoose = require('mongoose');
const cartSchema =  new mongoose.Schema({
    usercart:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    quantity:{
        type:Number
    },
    productcart:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product',
        required:true
    }]
 
},{timestamps:true});

module.exports = mongoose.model('Cart',cartSchema);