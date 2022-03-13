const express = require("express");
const router = express.Router();

const Fournisseur = require("../Models/Fournisseur");

router.post("/ajouter_fournisseur", (req, res) => {
  console.log("heyyyytt req .body", req.body);
  const fournisseur = new Fournisseur({
    nom: req.body.nom,
    prenom: req.body.prenom,
    email: req.body.email,
    poste_occupe: req.body.poste_occupe,
    site_web: req.body.site_web,
    tel: req.body.tel,
    adress: req.body.adress,
    city: req.body.city,
    state: req.body.state,
    code_postal: req.body.code_postal,
  });
  fournisseur.save();
  res.status(200).json({
    message: "Fournisseur added succesful",
  });
});

router.get("/get_fournisseur", (req, res) => {
  Fournisseur.find((err, docs) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json({
        data: docs,
      });
    }
  });
});

router.delete("/delete_fournisseur/:id", (req, res) => {
  console.log("herreeeeeee id ", req.params.id);
  Fournisseur.deleteOne({ _id: req.params.id }).then(
    res.status(200).json({
      message: "Fournisseur deleted succesful",
    })
  );
});
module.exports = router;
