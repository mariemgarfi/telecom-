import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Banner from "../Banner";

export default function Add_magasinier() {
  const [NomUtilisateur, setNomUtilisateur] = useState("");
  const [PrenomUtilisateur, setPrenomUtilisateur] = useState("");
  const [Email, setEmail] = useState("");
  const [Tel, setTel] = useState();
  const [Address, setAddress] = useState("");
  const [Ville, setVille] = useState("");
  const [Poste, setPoste] = useState("");
  const [magasin, setMagasin] = useState({});
  const [DataMagasin, setDataMagasin] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    getAllMagasin();
  }, []);

  const getAllMagasin = () => {
    axios
      .get("http://localhost:3200/api/get_Mgasain")
      .then((result) => {
        setDataMagasin(result.data.Magasin);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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

  const ChangeTel = (event) => {
    setTel(event.target.value);
  };

  const ChangeMagasin=(event)=>{
    setMagasin(event.target.value)
  }
  const HandleSubmit = () => {
    let data = {
      NomUtilisateur: NomUtilisateur,
      PrenomUtilisateur: PrenomUtilisateur,
      Email: Email,
      Poste: Poste,
      Tel: Tel,
      password:NomUtilisateur+Tel,
      magasin:magasin
     
    };
    console.log("here response", data);

    axios
      .post("http://localhost:3200/api/ajouter_Utilisateur", data)
      .then((response) => {
        console.log("here response", response.data.message);
        navigate("/tableUser");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Fragment>
      <div className="app-main__inner">
        <Banner title="Ajouter Utilisateur " icon="pe-7s-add-user" />
        <div className="main-card mb-3 card">
          <div className="card-body">
            <h1 className="card-title">Remplir le formulaire</h1>
            <form>
              <div className="form-row">
                <div className="col-md-6">
                  <div className="position-relative form-group">
                    <label htmlFor="exampleEmail11">Nom Utilisateur</label>
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
                    <label htmlFor="examplePassword11">Prénom Utilisateur</label>
                    <input
                      name="PréNomUtilisateur"
                      id="examplePassword11"
                      placeholder="Prénom Utilisateur"
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
                    <label htmlFor="exampleTele">Tel</label>
                    <input
                      name="Tel"
                      id="exampleTele"
                      placeholder="Tel"
                      type="number"
                      className="form-control"
                      onChange={(event) => ChangeTel(event)}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="position-relative form-group">
                    <label htmlFor="examplePoste">Poste Occupé</label>
                    <select
                      name="categorie"
                      className="form-control"
                      onChange={(event) => ChangePoste(event)} >
                      <option value="">Sélectionner Magasin </option>
                      <option value="RDS">Responsable de stock  </option>
                      <option value="RDA">Responsable d'achat  </option>
                      <option value="RDV">Responsable de vente  </option>
               
                      
                    </select>
                  
                  </div>
                </div>
               
            
              
                <div className="col-md-6">
                  <div className="position-relative form-group">
                    <label htmlFor="examplePassword11">Magasin</label>
                    <select
                      name="categorie"
                      className="form-control"
                      onChange={(event) => ChangeMagasin(event)} >
                      <option value="">Sélectionner Magasin </option>
                      {DataMagasin?.map((value, i) => (
                        <option
                          key={i} value={value._id}>{value.nomMagasin}</option>
                      ))}
                    </select>
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
  );
}
