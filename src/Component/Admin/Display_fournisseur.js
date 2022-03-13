import React, { useEffect, useState } from "react";
import Banner from "../Banner";
import axios from "axios";

export default function Display_fourniseur() {
  const [Fournisseur, setFournisseur] = useState([]);

  useEffect(() => {
    getAllFournisseur();
  }, []);

  const getAllFournisseur = () => {
    axios
      .get("http://localhost:3200/api/get_fournisseur")
      .then((result) => {
        setFournisseur(result.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const DeleteFournisseur = (id) => {
    axios
      .delete("http://localhost:3200/api/delete_fournisseur/" + id)
      .then((result) => {
        console.log("here", result.data.message);
        getAllFournisseur();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="app-main__inner">
      <Banner title="Mes Fournisseur" icon="pe-7s-users" />
      <div className="row">
        <div className="col-12">
          <div className="main-card mb-3 card">
            <div className="card-body">
              <h5 className="card-title"> table Fournisseur</h5>
              <table className="mb-0 table">
                <thead>
                  <tr>
                    <th>Nom</th>
                    <th>Prenom</th>
                    <th>Email</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {Fournisseur.map((value, i) => (
                    <tr key={i}>
                      <td>{value.nom}</td>
                      <td>{value.prenom}</td>
                      <td>{value.email}</td>
                      <td>
                        <button className="mb-2 mr-2 btn-transition btn btn-outline-info">
                          <i className="pe-7s-pen" style={{ fontSize: 18 }}></i>
                        </button>
                        <button
                          className="mb-2 mr-2 btn-transition btn btn-outline-danger"
                          onClick={() => DeleteFournisseur(value._id)}
                        >
                          <i
                            className="pe-7s-trash"
                            style={{ fontSize: 18 }}
                          ></i>
                        </button>

                        <button className="mb-2 mr-2 btn-transition btn btn-outline-success">
                          <i
                            className="pe-7s-look "
                            style={{ fontSize: 18 }}
                          ></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
