const mongoose = require("mongoose");
const MagasinierSchema = mongoose.Schema({
  NomUtilisateur: { type: String },
  PrenomUtilisateur: { type: String },
  Email: { type: String },
  Poste: { type: String },
  Tele: { type: String },
  Address: { type: String },
  Ville: { type: String },
});

const Magasinier = mongoose.model("Magasinier", MagasinierSchema);
module.exports = Magasinier;