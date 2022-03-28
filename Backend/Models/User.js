const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
  NomUtilisateur: { type: String },
  PrenomUtilisateur: { type: String },
  Email: { type: String },
  Poste: { type: String },
  Tele: { type: String },
  Address: { type: String },
  Ville: { type: String },
});

const User= mongoose.model("User", UserSchema);
module.exports = User;