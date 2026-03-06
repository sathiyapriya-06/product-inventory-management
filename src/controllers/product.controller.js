
const Product = require("../models/Product");

exports.createProduct = async(req,res)=>{

const product = new Product({
...req.body,
userId:req.userId
});

await product.save();

res.json(product);
};

exports.getProducts = async(req,res)=>{

const products = await Product.find({userId:req.userId});

res.json(products);
};

exports.updateProduct = async(req,res)=>{

await Product.findByIdAndUpdate(req.params.id,req.body);

res.json({message:"Product Updated"});
};

exports.deleteProduct = async(req,res)=>{

await Product.findByIdAndDelete(req.params.id);

res.json({message:"Product Deleted"});
};
