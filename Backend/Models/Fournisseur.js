const mongoose = require("mongoose");

const FournisseurSchema = mongoose.Schema({
  nom: { type: String },
  prenom: { type: String },
  email: { type: String },
  poste_occupé: { type: String },
  Site_Web: { type: String },
  tel: { type: Number },
  adress: { type: String },
  city: { type: String },
  state: { type: String },
  code_postal: { type: String },

});

const Fournisseur = mongoose.model("Fournisseur", FournisseurSchema);

module.exports = Fournisseur;
