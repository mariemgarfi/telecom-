const mongoose = require("mongoose");
   
const CommandeSchema=mongoose.Schema({
     
     
     nomarticle:{type : String},
     codearticle: {type : String},
     categorie:{type : String},
     Email: {type : String},
     quantitearticl: {type : String},
     nomfournisseur:{type : String},
     datecommande: {type : String},
     commenter: {type : String}
    });

    const Commande= mongoose.model("Commande",CommandeSchema);
  module.exports =Commande;