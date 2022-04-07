import React, { Fragment, useEffect, useState } from "react";
import Banner from "../Banner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function Edit_commande() {

  const [nomarticle, setNomarticle] = useState("");
  const [codearticle, setCodearticle] = useState("");
  const [categorie_article, setCategorie_article] = useState("");
  const [quantitearticl, setQuantitearticle] = useState("");
  const [nomfournisseur, setNomfournisseur] = useState("");
  const [emailfournisseur, setEmailfournisseur] = useState("");
  const [datecommande, setDatecommande] = useState("");
  const [commenter, setCommenter] = useState("");
  const [categorie, setCategorie] = useState([]);

  let param = useParams();
  let navigate = useNavigate();
  useEffect(() => {
    getCommandeById();
  }, []);

  const getCommandeById = () => {
    axios
      .get("http://localhost:3200/api/get_commande_byId/" + param.id)
        .then((result) => {
        let data = result.data.Commande;
        setNomarticle(data.nomarticle);
        setCodearticle(data.codearticle);
        setCategorie_article(data.categorie_article);
        setQuantitearticle(data.quantitearticle);
        setNomfournisseur(data.nomfournisseur);
        setEmailfournisseur(data.emailfournisseur);
        setDatecommande(data.datecommande);
        setCommenter(data.commenter);
      })
    .catch((err) => {
      console.log(err);
    });
};
const ChangeNomarticle = (event) => {
  setNomarticle(event.target.value);
};
const ChangeCodearticle = (event) => {
  setCodearticle(event.target.value);
};
const ChangeQuantitearticle = (event) => {
  setQuantitearticle(event.target.value);
};
const ChangeNomfournisseur = (event) => {
  setNomfournisseur(event.target.value);
};
const ChangeEmailfournisseur = (event) => {
  setEmailfournisseur(event.target.value);
};
const ChangeDatecommande = (event) => {
  setDatecommande(event.target.value);
};
const ChangeCommenter = (event) => {
  setCommenter(event.target.value);

};
const ChangeCategorie_article = (event) => {
  setCategorie_article(event.target.value);

};


const HandleSubmit = () => {
  let data = {
    
    nomarticle: nomarticle,
    codearticle: codearticle,
    categorie_article: categorie_article,
    Email: emailfournisseur,
    quantitearticl: quantitearticl,
    nomfournisseur: nomfournisseur,
    datecommande: datecommande,
    commenter: commenter,

  }
  console.log("here response", data);
  axios
    .put("http://localhost:3200/api/Update_commande", data)
    .then((response) => {
      console.log("here response", response.data.message);
      navigate("/tableCammande")
    })
    .catch((error) => {
      console.log(error);
    });
};
return (
  <Fragment>

    <div className="app-main__inner">
      <Banner title="Ajouter Commande" icon="pe-7s-add-user" />
      <div className="main-card mb-3 card">
        <div className="card-body">
          <h1 className="card-title">Remplir le formulaire</h1>
          <form>
            <div className="form-row">
              <div className="col-md-6">
                <div className="position-relative form-group">
                  <label htmlFor="exampleEmail11">Nom Article</label>
                  <input
                    name="nomarticle"
                    id="exampleNomarticle"
                    placeholder="Nomarticle"
                    type="text"
                    className="form-control"
                    onChange={(event) => ChangeNomarticle(event)}
                    value={nomarticle || ""}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="position-relative form-group">
                  <label htmlFor="exampleCodearticle">Code Article</label>
                  <input
                    name="nomCodearticle"
                    id="exampleCode article"
                    placeholder="Codearticle"
                    type="text"
                    className="form-control"
                    onChange={(event) => ChangeCodearticle(event)}
                    value={codearticle || ""}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="position-relative form-group">
                  <label htmlFor="examplePassword11">categorie_article</label>
                  <select
                    name="categorie"
                    className="form-control"
                    onChange={(event) => ChangeCategorie_article(event)} >
                    <option value="">Sélectionner Ctergorier </option>
                    {categorie?.map((value, i) => (
                      <option
                        key={i} value={value.categorie}>{value.categorie}</option>
                    ))}

                  </select>
                </div>
              </div>


              <div className="col-md-6">
                <div className="position-relative form-group">
                  <label htmlFor="exampleQuantitearticl">Quantite articl</label>
                  <input
                    name="nomQuantitearticl"
                    id="exampleQuantitearticl"
                    placeholder="1234"
                    type="number"
                    className="form-control"
                    onChange={(event) => ChangeQuantitearticle(event)}
                    value={quantitearticl || ""}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="position-relative form-group">
                  <label htmlFor="exampleNomfournisseur">Nom fournisseure</label>
                  <input
                    name="nomNomfournisseur"
                    id="exampleNomfournisseur"
                    placeholder="Nom fournisseur"
                    type="text"
                    className="form-control"
                    onChange={(event) => ChangeNomfournisseur(event)}
                    value={nomfournisseur || ""}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="position-relative form-group">
                  <label htmlFor="exampleEmailfournisseu">Email fournisseu</label>
                  <input
                    name="nomEmailfournisseue"
                    id="exampleEmailfournisseu"
                    placeholder="nom@gmail.com"
                    type="email"
                    className="form-control"
                    onChange={(event) => ChangeEmailfournisseur(event)}
                    value={emailfournisseur || ""}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="position-relative form-group">
                  <label htmlFor="exampleDatecommande">Date commande</label>
                  <input
                    name="nomDatecommande"
                    id="exampleDatecommande"
                    placeholder="JJ/MM/AAAA"
                    type="date"
                    className="form-control"
                    onChange={(event) => ChangeDatecommande(event)}
                    value={datecommande || ""}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="position-relative form-group">
                  <label htmlFor="exampleCommenter">Commenter</label>
                  <input
                    name="nomCommenter<"
                    id="exampleCommenter<"
                    placeholder="Commenter<"
                    type="text"
                    className="form-control"
                    onChange={(event) => ChangeCommenter(event)}
                    value={commenter || ""} />
                </div>
              </div>
              <button
                type="button"
                className="mt-2 btn btn-primary"

                onClick={HandleSubmit}
              >
                Envoyer
              </button>
            </div>
          </form>
        </div>

      </div >
    </div >
  </Fragment >
);
}
