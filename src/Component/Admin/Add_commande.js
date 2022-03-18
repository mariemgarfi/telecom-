import React, { Fragment, useState } from 'react'
import Banner from "../Banner";

export default function Add_commande() {
  const [nomarticle, setNomarticle] = useState("");
  const [codearticle, setCodearticle] = useState("");
  const [categorie, setCategorie] = useState("");
  const [quantitearticl, setQuantitearticle] = useState("");
  const [nomfournisseur, setNomfournisseur] = useState("");
  const [emailfournisseur, setEmailfournisseur] = useState("");
  const [datecommande, setDatecommande] = useState("");
  const [commenter, setCommenter] = useState("");


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
                    />
                  </div>
                </div><div className="mb-2 mr-2 btn-group">
                  <button className="btn btn-light">categorie</button>
                  <button type="button" aria-haspopup="true" aria-expanded="false" data-toggle="dropdown" className="dropdown-toggle-split dropdown-toggle btn btn-light"><span className="sr-only">Toggle Dropdown</span></button>
                  <div tabIndex={-1} role="menu" aria-hidden="true" className="dropdown-menu">
                    <button type="button" tabIndex={0} className="dropdown-item">Menus</button>
                    <button type="button" tabIndex={0} className="dropdown-item">Settings</button>
                    <h6 tabIndex={-1} className="dropdown-header">Header</h6>
                    <button type="button" tabIndex={0} className="dropdown-item">Actions</button>
                    <div tabIndex={-1} className="dropdown-divider" />
                    <button type="button" tabIndex={0} className="dropdown-item">Dividers</button>
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
              />
            </div>
          </div>
          <button
                type="button"
                className="mt-2 btn btn-primary"
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
