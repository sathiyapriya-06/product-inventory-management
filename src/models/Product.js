
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
userId:{
type:mongoose.Schema.Types.ObjectId,
ref:"User"
},
name:String,
price:Number,
quantity:Number,
description:String
},{timestamps:true});

module.exports = mongoose.model("Product",productSchema);
