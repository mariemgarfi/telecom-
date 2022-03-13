const express = require('express')
const router = express.Router()


const Fournisseur = require("../Models/Fournisseur")




router.post("/ajouter_fournisseur", (req, res) => {

    console.log("heyyyytt req .body", req.body);
    const fournisseur = new Fournisseur({
        nom: req.body.nom,
        prenom: req.body.prenom,
        email: req.body.email,
        Poste_occupé: req.body.Poste_occupé,
        Site_Web: req.body.Site_web,
        tel: req.body.tel,
        adress: req.body.adress,
        city: req.body.city,
        state: req.body.state,
        code_postal: req.body.code_postal,
    })
    fournisseur.save()
    res.status(200).json({
        message: "Fournisseur added succesful"
    })
})











module.exports = router