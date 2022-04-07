
const express = require("express");


const router = express.Router();
const Commande=require("../Models/Commande")
router.post("/Ajouter_Commande", (req, res) => {
  console.log("heyyyytt req .body", req.body);
  const commande = new Commande({
    nomarticle: req.body.nomarticle,
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
router.put("/Update_commande", (req, res) => {
  const commande = {
    _id: req.body._id,
    nomarticle: req.body.nomarticle,
    codearticle:req.body.codearticle,
    categorie_article: req.body.categorie_article,
    Email: req.body.Email,
    quantitearticl: req.body.quantitearticl,
    nomfournisseur: req.body.nomfournisseur,
    datecommande: req.body.datecommande,
    commenter: req.body.commenter,

  };
  Commande.updateOne({ _id: req.body._id }, commande).then(
    res.status(200).json({
      message: "Commande updated successfuly",
    })
  );
});

router.get("/get_Commande", (req, res) => {
  Commande.find((err, docs) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json({
        data: docs,
      });
    }
  });
});

router.get("/get_commande_byId/:id", (req, res) => {
 Commande.findOne({ _id: req.params.id }).then((findedObject) => {
    if (findedObject) {
      res.status(200).json({
        Commande: findedObject,
      });
    }
  });
});

router.delete("/delete_Commande/:id", (req, res) => {
  console.log("herreeeeeee id ", req.params.id);
  Commande.deleteOne({ _id: req.params.id }).then(
    res.status(200).json({
      message:" Commande deleted succesful",
    })
  );
});



module.exports = router;