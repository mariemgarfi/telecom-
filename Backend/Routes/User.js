const express = require("express");
const router = express.Router();
const User = require("../Models/User");



router.post("/ajouter_Utilisateur", (req, res) => {
    console.log("heyyyytt req .body", req.body);
    const user= new User({
        NomUtilisateur:req.body.NomUtilisateur,
        PrenomUtilisateur: req.body.PrenomUtilisateur,
        Email: req.body.Email,
        Poste:req.body.Poste,
        Tele: req.body.Tele,
        Address:req.body.Address,
        Ville:req.body.Ville,
    });
    user.save();
    res.status(200).json({
        message: "user added succesful",
      });
    });
    router.get("/get_user", (req, res) => {
      User.find((err, docs) => {
        if (err) {
          console.log(err);
        } else {
          res.status(200).json({
            data: docs,
          });
        }
      });
    });
    router.delete("/delete_user/:id", (req, res) => {
      console.log("herreeeeeee id ", req.params.id);
      User.deleteOne({ _id: req.params.id }).then(
        res.status(200).json({
          message: "user deleted succesful",
        })
      );
    });
    module.exports = router;