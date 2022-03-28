
import axios from 'axios';
import React, { useState, Fragment, useEffect } from 'react'
import Banner from '../Banner';

export default function Add_products() {
  const [categorie_article, setCategorie_article] = useState("");
  const [reference, setReference] = useState("");
  const [lieu_stokage, setLieu_stokage] = useState("");
  const [Code, setCode] = useState("");
  const [type, settype] = useState("");

  
  const [categorie, setCategorie] = useState([]);

  const ChangeCategorie = (event) => {
    setCategorie_article(event.target.value);
    console.log(event.target.value);
  };

  const ChangeCode = (event) => {
    setCode(event.target.value);
  };
  const Changetype_articl = (event) => {
    settype(event.target.value);
  };
  const ChangeReference = (event) => {
    setReference(event.target.value);
  };
  const ChangeLieu_stokage = (event) => {
    setLieu_stokage(event.target.value);
  };

 useEffect(() => {
      getAllCategorie();
  }, []);

  const HandleSubmit = () => {
    let data = {
      categorie_article: categorie_article,
      lieu_stokagee: lieu_stokage,
      reference: reference,
      Code: Code,
      type: type,

    console.log("here response", data);

 
    axios
      .post("http://localhost:3200/api/ajouter_Produits", data)
      .then((response) => {
        console.log("here response", response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });


  return (
    <Fragment>
      <div className="app-main__inner">
        <Banner title="Ajouter Produit" icon="fa-cart-arrow-down" />
        <div className="main-card mb-3 card">
          <div className="card-body">
            <h1 className="card-title">Remplir le formulaire</h1>
            <form>
              <div className="form-row">
                 <div className="col-md-6">
                  <div className="position-relative form-group">

                    <label htmlFor="examplePassword11">Categorie Article</label>
                    <select 
                      name="categorie"
                      className="form-control"
                      onChange={(event) => ChangeCategorie(event)} >
                     <option value="">Sélectionner Ctergorier </option>
                     {categorie.map((value,i)=>(
                        <option
                      key={i} value={value.categorie}>{value.categorie}</option>
                     ))}
                     </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="position-relative form-group">
                    <label htmlFor="examplCode">Code Article</label>
                    <input
                      name="Code"
                      id="exampleCode"
                      placeholder="Id"
                      type="text"
                      className="form-control"
                      onChange={(event) => ChangeCode(event)}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="position-relative form-group">
                    <label htmlFor="exampletype"> Type</label>
                    <input
                      name="type_article"
                      id="exampletype_article"
                      placeholder="Type"
                      type="text"
                      className="form-control"
                      onChange={(event) => Changetype_articl(event)}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="position-relative form-group">
                    <label htmlFor="exampleRefERENCE">Reference</label>
                    <input
                      name="Reference"
                      id="exampleReference"
                      placeholder="REF"
                      type="text"
                      className="form-control"
                      onChange={(event) => ChangeReference(event)}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="position-relative form-group">
                    <label htmlFor="exampleLieu_stokage">Lieu Stokage"</label>
                    <input
                      name="Lieu_stokage"
                      id="exampleLieu_stokage"
                      placeholder="Lieu_stokage"
                      type="text"
                      className="form-control"
                      onChange={(event) => ChangeLieu_stokage(event)}
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
