import React, { Fragment, useEffect, useState } from "react";
import Banner from "../Banner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function Edit_User() {
  const [NomUtilisateur, setNomUtilisateur] = useState("");
  const [PrenomUtilisateur, setPrenomUtilisateur] = useState("");
  const [Email, setEmail] = useState("");
  const [Tele, setTele] = useState();
  const [Address, setAddress] = useState("");
  const [Ville, setVille] = useState("");
  const [Poste, setPoste] = useState("");

  const [ahlem, setAhlem] = useState("");
  let param = useParams();
  let navigate=useNavigate()

  useEffect(() => {
    getUserById();
  }, []);

  const getUserById = () => {
    axios
      .get("http://localhost:3200/api/get_user_byId/" + param.id)
      .then((result) => {
        let data = result.data.user;
        setNomUtilisateur(data.NomUtilisateur);
        setPrenomUtilisateur(data.PrenomUtilisateur);
        setEmail(data.Email);
        setTele(data.Tele);
        setAddress(data.Address);
        setVille(data.Ville);
        setPoste(data.Poste);
      })
      .catch((err) => {
        console.log(err);
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
      _id: param.id,
      NomUtilisateur: NomUtilisateur,
      PrenomUtilisateur: PrenomUtilisateur,
      Email: Email,
      Poste: Poste,
      Tele: Tele,
      Address: Address,
      Ville: Ville,
    };

    axios
      .put("http://localhost:3200/api/Update_Utilisateur", data)
      .then((response) => {
        console.log("here response", response.data.message);
        navigate("/tableUser")
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Fragment>
      <div className="app-main__inner">
        <Banner title="Modifier Utilisateur " icon="pe-7s-add-user" />
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
                      value={NomUtilisateur || ""}
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
                      value={PrenomUtilisateur || ""}
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
                      value={Email || ""}
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
                      value={Poste || ""}
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
                      value={Tele || ""}
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
                      value={Address || ""}
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
                      value={Ville || ""}
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
  );
}
