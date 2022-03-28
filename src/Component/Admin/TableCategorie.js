import React, { useEffect, useState } from "react";
import Banner from "../Banner";
import axios from "axios";
import Modal_delete from "./Modal_delete";

export default function TableCategorie() {

    const [Categorie, setCategorie] = useState([]);
    const [open, setOpen] = useState(false);
    const [CategorieSelected, setCategorieSelected] = useState({});

    const handleClickOpen = (categorie) => {
        setCategorieSelected(categorie)
        setOpen(true);
      };
      const handleClose = () => {
        setOpen(false);
        getAllCategorie();
      };
    useEffect(() => {
        getAllCategorie();
    }, []);

    const getAllCategorie = () => {
        axios
            .get("http://localhost:3200/api/get_Categorie")
            .then((result) => {
                setCategorie(result.data.category);
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
                            <h5 className="card-title"> table  des Categorie</h5>
                            <table className="mb-0 table">
                                <thead>
                                    <tr>

                                        <th>categorie article</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Categorie?.map((value, i) => (
                                        <tr key={i}>
                                            <td>{value.categorie}</td>

                                            <td>
                                                <button className="mb-2 mr-2 btn-transition btn btn-outline-info">
                                                    <i className="pe-7s-pen" style={{ fontSize: 18 }}></i>
                                                </button>
                                                <button
                                                    className="mb-2 mr-2 btn-transition btn btn-outline-danger"
                                                    onClick={() => handleClickOpen(value)}
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
                            {open? <Modal_delete categorie={CategorieSelected} open={open}  onClose={handleClose}/> :null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}