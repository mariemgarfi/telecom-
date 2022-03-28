import axios from 'axios';
import React, { Fragment, useState } from 'react'
import Banner from '../Banner';

export default function Add_magasinier() {
    const [NomUtilisateur, setNomUtilisateur] = useState("");
    const [PrenomUtilisateur, setPrenomUtilisateur] = useState("");
    const [Email, setEmail] = useState("");
    const [Tele, setTele] = useState();
    const [Address, setAddress] = useState("");
    const [Ville, setVille] = useState("");
    const [Poste, setPoste] = useState("");

    const ChangeNomUtilisateur = (event) => {
        setNomUtilisateur(event.target.value);
      };
      const ChangePrenomUtilisateur = (event) => {
        setPrenomUtilisateur(event.target.value);
      };
      const ChangeEmail = (event) => {
        setEmail(event.target.value);
      };
      const ChangePoste = (event) => {
        setPoste(event.target.value);
      };
    
      
      const ChangeTele = (event) => {
        setTele(event.target.value);
      };
      const ChangeAddress = (event) => {
        setAddress(event.target.value);
      };
      const ChangeVille = (event) => {
        setVille(event.target.value);
      };
      const HandleSubmit = () => {
        let data = {
         NomUtilisateur:NomUtilisateur,
          PrenomUtilisateur: PrenomUtilisateur,
          Email: Email,
          Poste: Poste,
          Tele: Tele,
          Address: Address,
          Ville: Ville,
         
        };
        console.log("here response", data);
    
        axios
        .post ("http://localhost:3200/api/ajouter_Utilisateur", data)
        .then((response) => {
          console.log("here response", response.data.message);
        })
        .catch((error) => {
          console.log(error);
        });
    
    };
  return (
   <Fragment>
    <div className="app-main__inner">
      <Banner title="Ajouter Utilisateur " icon="pe-7s-add-user"/>
      <div className="main-card mb-3 card">
        <div className="card-body">
          <h1 className="card-title">Remplir le formulaire</h1>
          <form>
            <div className="form-row">
              <div className="col-md-6">
                <div className="position-relative form-group">
                  <label htmlFor="exampleEmail11">NomUtilisateur</label>
                  <input
                    name="NomUtilisateur"
                    id="exampleNomUtilisateur"
                    placeholder="NomUtilisateur"
                    type="text"
                    className="form-control"
                    onChange={(event) => ChangeNomUtilisateur(event)}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="position-relative form-group">
                  <label htmlFor="examplePassword11">PréNomUtilisateur</label>
                  <input
                    name="PréNomUtilisateur"
                    id="examplePassword11"
                    placeholder="PréNomUtilisateur"
                    type="text"
                    className="form-control"
                    onChange={(event) => ChangePrenomUtilisateur(event)}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="position-relative form-group">
                  <label htmlFor="exampleEmail">Email</label>
                  <input
                    name="Email"
                    id="exampleEmail11"
                    placeholder="E-mail"
                    type="Email"
                    className="form-control"
                    onChange={(event) => ChangeEmail(event)}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="position-relative form-group">
                  <label htmlFor="examplePoste">Poste Occupé</label>
                  <input
                    name="Poste"
                    id="examplePoste"
                    placeholder="Poste Occupé"
                    type="text"
                    className="form-control"
                    onChange={(event) => ChangePoste(event)}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="position-relative form-group">
                  <label htmlFor="exampleTele">Tele</label>
                  <input
                    name="Telee"
                    id="exampleTele"
                    placeholder="Tele"
                    type="number"
                    className="form-control"
                    onChange={(event) => ChangeTele(event)}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="position-relative form-group">
                  <label htmlFor="exampleAddress2">Address</label>
                  <input
                    name="address"
                    id="exampleAddress"
                    placeholder="Apartment, studio ,or floor"
                    type="text"
                    className="form-control"
                    onChange={(event) => ChangeAddress(event)}
                  />
                </div>
              </div>
              <div className="col-md-6">
                  <div className="position-relative form-group">
                    <label htmlFor="exampleVille">Ville</label>
                    <input
                      name="Ville"
                      id="exampleille"
                      placeholder="Ville"
                      type="text"
                      className="form-control"
                      onChange={(event) => ChangeVille(event)}
                    />
                     </div>
              </div>
            </div>
            <button
              type="button"
              onClick={HandleSubmit}
              className="mt-2 btn btn-primary"
            >
              Ajouter
            </button>
          </form>
        </div>
      </div>
    </div>
  </Fragment>
);}