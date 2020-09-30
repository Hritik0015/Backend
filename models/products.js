const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    productname:
    {
        type: String,
        required: true
    },
    productdesc:
    {
        type: String,
        required: true
    },
    rate:
    {
        type: Number,
      //  required: true
    },
    productimg:{
        type:String,
        required:true
    }
},{timestamps:true});
module.exports = mongoose.model('Product', productSchema);