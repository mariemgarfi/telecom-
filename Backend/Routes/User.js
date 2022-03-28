const express = require("express");
const router = express.Router();
const User = require("../Models/User");

router.post("/ajouter_Utilisateur", (req, res) => {
  console.log("heyyyytt req .body", req.body);
  const user = new User({
    NomUtilisateur: req.body.NomUtilisateur,
    PrenomUtilisateur: req.body.PrenomUtilisateur,
    Email: req.body.Email,
    Poste: req.body.Poste,
    Tele: req.body.Tele,
    Address: req.body.Address,
    Ville: req.body.Ville,
  });
  user.save();
  res.status(200).json({
    message: "user added succesful",
  });
});
router.put("/Update_Utilisateur", (req, res) => {
  const user = {
    _id: req.body._id,
    NomUtilisateur: req.body.NomUtilisateur,
    PrenomUtilisateur: req.body.PrenomUtilisateur,
    Email: req.body.Email,
    Poste: req.body.Poste,
    Tele: req.body.Tele,
    Address: req.body.Address,
    Ville: req.body.Ville,
  };
  User.updateOne({ _id: req.body._id }, user).then(
    res.status(200).json({
      message: "user updated successfuly",
    })
  );
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

router.get("/get_user_byId/:id", (req, res) => {
  User.findOne({ _id: req.params.id }).then((findedObject) => {
    if (findedObject) {
      res.status(200).json({
        user: findedObject,
      });
    }
  });
});

router.delete("/delete_User/:id", (req, res) => {
  console.log("herreeeeeee id ", req.params.id);
  User.deleteOne({ _id: req.params.id }).then(
    res.status(200).json({
      message: "user deleted succesful",
    })
  );
});
module.exports = router;
