const express = require("express");
const router = express.Router();
const Magasinier = require("../Models/Magasinier");



router.post("/ajouter_Utilisateur", (req, res) => {
    console.log("heyyyytt req .body", req.body);
    const magasinier= new Magasinier({
        NomUtilisateur:req.body.NomUtilisateur,
        PrenomUtilisateur: req.body.PrenomUtilisateur,
        Email: req.body.Email,
        Poste:req.body.Poste,
        Tele: req.body.Tele,
        Address:req.body.Address,
        Ville:req.body.Ville,
    });
    magasinier.save();
    res.status(200).json({
        message: "user added succesful",
      });
    });
    router.get("/get_Magasinier", (req, res) => {
      Magasinier.find((err, docs) => {
        if (err) {
          console.log(err);
        } else {
          res.status(200).json({
            data: docs,
          });
        }
      });
    });
    router.delete("/delete_Magasinier/:id", (req, res) => {
      console.log("herreeeeeee id ", req.params.id);
      Magasinier.deleteOne({ _id: req.params.id }).then(
        res.status(200).json({
          message: "Magasinier deleted succesful",
        })
      );
    });
    module.exports = router;
    