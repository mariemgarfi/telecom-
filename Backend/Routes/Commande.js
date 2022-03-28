
const express = require("express");


const router = express.Router();
const Commande=require("../Models/Commande")
router.post("/Ajouter_Commande", (req, res) => {
  console.log("heyyyytt req .body", req.body);
  const commande = new Commande({
    Nomarticle: req.body.Nomarticle,
    codearticle:req.body.codearticle,
    categorie_article: req.body.categorie_article,
    Email: req.body.Email,
    quantitearticl: req.body.quantitearticl,
    nomfournisseur: req.body.nomfournisseur,
    datecommande: req.body.datecommande,
    commenter: req.body.commenter,

  });
  commande.save();
  res.status(200).json({
    message: "Commande added succesful",
  });
});




module.exports = router;