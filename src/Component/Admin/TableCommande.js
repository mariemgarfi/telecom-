import React, { useEffect, useState } from "react";
import Modal_delete from "./Modal_delete";
import Banner from "../Banner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function TableCommande() {

  const [Commande, setCommande] = useState([]);
  const [open, setOpen] = useState(false);
  const [CommandeSelected, setCommandeSelected] = useState({});

  let navigate = useNavigate();




  const handleClickOpen = (Commande) => {
    setCommandeSelected(Commande);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    getAllCommande();
  };

  useEffect(() => {
    getAllCommande();
  }, []);

  const getAllCommande = () => {
    axios
      .get("http://localhost:3200/api/get_Commande")
      .then((result) => {
        setCommande(result.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="app-main__inner">
      <Banner title="Mes Commandes" icon="fa-shopping-cart" />
      <div className="row">
        <div className="col-12">
          <div className="main-card mb-3 card">
            <div className="card-body">
              <h5 className="card-title"> table des Commandes</h5>
              <table className="mb-0 table">
                <thead>
                  <tr>
                    <th> Nom Article</th>
                    <th> categorie_article</th>
                    <th> nom fournisseur</th>
                    <th>date commande</th>
                  </tr>
                </thead>
                <tbody>
                  {Commande?.map((value, i) => (
                    <tr key={i}>
                      <td>{value.nomarticle}</td>
                      <td>{value.categorie_article}</td>
                      <td>{value.nomfournisseur}</td>
                      <td>{value.datecommande}</td>

                      <td>
                        <button className="mb-2 mr-2 btn-transition btn btn-outline-info"
                          onClick={() => navigate("/Edit_Commande/" + value._id)}>
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

                       
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {open ? (
                <Modal_delete
                  data={CommandeSelected}
                  open={open}
                  onClose={handleClose}
                  type="Commande"
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
