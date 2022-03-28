const mongoose = require("mongoose");
   
const CommandeSchema=mongoose.Schema({
     
     
     Nomarticle:{type : String},
     codearticle: {type : String},
     categorie_article:{type : String},
     Email: {type : String},
     quantitearticl: {type : String},
     nomfournisseur:{type : String},
     datecommande: {type : String},
     commenter: {type : String}
    });

    const Commande= mongoose.model("Commande",CommandeSchema);
  module.exports =Commande;