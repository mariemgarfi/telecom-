const express = require("express");


const router = express.Router();

const Products = require("../Models/Products");
router.post("/ajouter_Produits", (req, res) => {
  console.log("heyyyytt req .body", req.body);
  const products = new Products({
    categorie_article: req.body.categorie_article,
    lieu_stokage: req.body.lieu_stokage,
    reference: req.body.reference,
    Code: req.body.Code,
    type: req.body.type,
  });
  products.save();
  res.status(200).json({
    message: "Products added succesful",
  });
});
router.get("/get_Products", (req, res) => {
  Products.find((err, docs) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json({
        data: docs,
      });
    }
  });
});
router.delete("/delete_Products/:id", (req, res) => {
  console.log("herreeeeeee id ", req.params.id);
  Products.deleteOne({ _id: req.params.id }).then(
    res.status(200).json({
      message: "Products deleted succesful",
    })
  );
});


module.exports = router;
