const mongoose = require("mongoose");
   
const ProductsSchema=mongoose.Schema({
     
     categorie:{type : String},
     lieu_stokage:{type : String},
     reference:{type : String},
     Code:{type : String},
     type:{type:String},
    });

    const Products = mongoose.model("Products", ProductsSchema);
  module.exports = Products;