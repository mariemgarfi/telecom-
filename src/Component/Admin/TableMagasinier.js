import React, { useEffect, useState } from "react";
import Banner from "../Banner";
import axios from "axios";

export default function TableMagasinier() {
    const [Magasinier, setMagasinier] = useState([]);

    useEffect(() => {
        getAllMagasinier();
    }, []);

    const getAllMagasinier = () => {
        axios
            .get("http://localhost:3200/api/get_Magasinier ")
            .then((result) => {
                setMagasinier(result.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const DeleteMagasinier = (id) => {
        axios
            .delete("http://localhost:3200/api/delete_Magasinier /" + id)
            .then((result) => {
                console.log("here", result.data.message);
                getAllMagasinier();
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="app-main__inner">
            <Banner title="Mes Produits" icon="fa-shopping-cart" />
            <div className="row">
                <div className="col-12">
                    <div className="main-card mb-3 card">
                        <div className="card-body">
                            <h5 className="card-title"> table  des Produit</h5>
                            <table className="mb-0 table">
                                <thead>
                                    <tr>

                                        <th> NomUtilisateur</th>
                                        <th>PrenomUtilisateur</th>
                                          <th>Poste</th>
                                          <th> Email</th>
                                        <th >Tele</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Magasinier.map((value, i) => (
                                        <tr key={i}>
                                            <td>{value.NomUtilisateur}</td>
                                            <td>{value.PrenomUtilisateur}</td>
                                            <td>{value.Poste}</td>
                                            <td>{value.Email}</td>
                                            <td>{value.Tele}</td>

                                            <td>
                                                <button className="mb-2 mr-2 btn-transition btn btn-outline-info">
                                                    <i className="pe-7s-pen" style={{ fontSize: 18 }}></i>
                                                </button>
                                                <button
                                                    className="mb-2 mr-2 btn-transition btn btn-outline-danger"
                                                    onClick={() => DeleteMagasinier(value._id)}
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
