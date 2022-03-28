import React, { useEffect, useState } from "react";
import Banner from "../Banner";
import axios from "axios";
import Modal_delete from "./Modal_delete";

export default function TableUser() {
  const [User, setUser] = useState([]);
  const [open, setOpen] = useState(false);
  const [userSelected, setUserSelected] = useState({});

  useEffect(() => {
    getAllUser();
  }, []);

  const handleClickOpen = (user) => {
    setUserSelected(user);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    getAllUser();
  };

  const getAllUser = () => {
    axios
      .get("http://localhost:3200/api/get_user ")
      .then((result) => {
        setUser(result.data.data);
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
              <h5 className="card-title"> tableau d'Utilisateur</h5>
              <table className="mb-0 table">
                <thead>
                  <tr>
                    <th> NomUtilisateur</th>
                    <th>PrenomUtilisateur</th>
                    <th>Poste</th>
                    <th> Email</th>
                    <th>Tele</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {User?.map((value, i) => (
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
              {open ? (
                <Modal_delete
                  user={userSelected}
                  open={open}
                  onClose={handleClose}
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
