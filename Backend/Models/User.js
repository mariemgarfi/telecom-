const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
  NomUtilisateur: { type: String },
  PrenomUtilisateur: { type: String },
  Email: { type: String },
  Poste: { type: String },
  Tel : { type: String },
  password : { type: String },
  magasin :{},
});

const User= mongoose.model("User", UserSchema);
module.exports = User;