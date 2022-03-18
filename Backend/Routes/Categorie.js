const express = require("express");


const router = express.Router();
const Categorie=require("../Models/Categorie");
router.post("/ajouter_Categorie", (req, res) => {
  console.log("heyyyytt req .body", req.body);
  const categorie = new Categorie({
    Categorie: req.body.Categorie,

  });
  categorie.save();
  res.status(200).json({
    message: "Categorie added succesful",
  });
});
router.get("/get_Categorie", (req, res) => {
  Categorie.find((err, docs) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json({
        data: docs,
      });
    }
  });
});
router.delete("/delete_Categorie/:id", (req, res) => {
  console.log("herreeeeeee id ", req.params.id);
  Categorie.deleteOne({ _id: req.params.id }).then(
    res.status(200).json({
      message: "Categorie deleted succesful",
    })
  );
});





module.exports = router;
