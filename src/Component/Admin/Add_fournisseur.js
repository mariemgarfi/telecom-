import React, { Fragment, useState } from "react";
import axios from "axios";

export default function Add_fournisseur() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState();
  const [adress, setAdress] = useState("");
  const [city, setCity]=useState("");
  const [state, setState]=useState("");
  const[code_postal, setCode_postal]=useState("");
  const [poste_occupé , setPoste_occupé]=useState("");
  const[Site_Web , setSite_Web] =useState("");



  const ChangeNom = (event) => {
    setNom(event.target.value);
  };
  const ChangePrenom = (event) => {
    setPrenom(event.target.value);
  };
  const ChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const ChangePoste_occupé =(event)=>
  { setPoste_occupé(event.target.value)
  };

  const ChangeSite_Web =(event)=>
  { setSite_Web=(event.target.value)
  };
  const ChangeTel = (event) => {
    setTel(event.target.value);
  };
  const ChangeAdress = (event) => {
    setAdress(event.target.value)
  };
const ChangeCity=(event) =>{
  setCity(event.target.value)
};
const ChangeState=(event) =>{
  setState(event.target.value)
};
const ChangeCode_postal=(event) =>{
  setCode_postal(event.target.value)
};

  const HandleSubmit = () => {
    let data = {
      nom: nom,
      prenom: prenom,
      email: email,
      poste: poste_occupé,
      site_web :Site_Web,
      tel: tel,
      adress: adress,
      ville : city,
      etat : state,
      code_postal : code_postal,
    };
    console.log("here response", data);

    axios
      .post("http://localhost:3200/api/ajouter_fournisseur", data)
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
        <div className="app-page-title">
          <div className="page-title-wrapper">
            <div className="page-title-heading">
              <div className="page-title-icon">
                <i className="pe-7s-add-user"> </i>
              </div>
              <div>Ajouter Fournisseur</div>
            </div>
          </div>
        </div>
        <div className="main-card mb-3 card">
          <div className="card-body">
            <h1 className="card-title">Remplir le formulaire</h1>
            <form >
              <div className="form-row">
                <div className="col-md-6">
                  <div className="position-relative form-group">
                    <label htmlFor="exampleEmail11" >
                      Nom
                      </label>
                     <input
                      name="nom"
                      id="exampleNom"
                      placeholder="Nom"
                      type="text"
                      className="form-control"
                      onChange={(event) => ChangeNom(event)}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="position-relative form-group">
                    <label htmlFor="examplePassword11" >
                      Prénom
                     </label>
                     <input
                      name="Prénom"
                      id="examplePassword11"
                      placeholder="Prénom"
                      type="text"
                      className="form-control"
                      onChange={(event) => ChangePrenom(event)}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="position-relative form-group">
                    <label htmlFor="exampleEmail" >
                      Email
                     </label>
                     <input
                      name="email"
                      id="exampleEmail11"
                      placeholder="E-mail"
                      type="email"
                      className="form-control"
                      onChange={(event) => ChangeEmail(event)}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="position-relative form-group">
                    <label htmlFor="examplePoste_occupé" >
                      Poste Occupé
                      </label>
                     <input
                      name="Poste_occupé"
                      id="examplePoste_occupé"
                      placeholder=""
                      type="text"
                      className="form-control"
                      onChange={(event) => ChangePoste_occupé(event)}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="position-relative form-group">
                    <label htmlFor="exampleSite_Web" >
                      Site Web
                      </label>
                     <input
                      name="Site_Web"
                      id="exampleSite_Web"
                      placeholder="Site Web"
                      type="text"
                      className="form-control"
                      onChange={(event) => ChangeSite_Web(event)}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="position-relative form-group">
                    <label htmlFor="exampleTel" >
                      Tel
                      </label>
                     <input
                      name="tele"
                      id="exampleTel"
                      placeholder="tel"
                      type="number"
                      className="form-control"
                      onChange={(event) => ChangeTel(event)}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                   <div className="position-relative form-group">
                     <label htmlFor="exampleAddress2" >Address
                     </label>
                     <input name="address" 
                     id="exampleAddress" 
                     placeholder="Apartment, studio ,or floor"
                     type="text"
                      className="form-control" 
                      onChange={(event) => ChangeAdress(event)}/>
                  </div>
                </div>
            
                <div className="col-md-6">
                  <div className="position-relative form-group">
                    <label htmlFor="exampleCity" >City</label>
                    <input name="city" id="exampleCity"
                     type="text" 
                    className="form-control"
                    onChange={(event) => ChangeCity(event)}/> 
                   </div>
                </div>
                   <div className="col-md-6">
                    <div className="position-relative form-group">
                      <label htmlFor="exampleState" >State
                      </label>
                     <input name="state"
                     id="exampleState" 
                     type="text" className="form-control" 
                     onChange={(event) => ChangeState(event)}/>
                    </div>
                  </div>
                <div className="col-md-6">
                  <div className="position-relative form-group">
                    <label htmlFor="exampleZip" >code postal
                   </label><input name="zip" id="exampleZip"
                   type="text" className="form-control" 
                   onChange={(event) => ChangeCode_postal(event)}/></div>
                   </div>
               </div>
                 <button
                       type="button"
                onClick={HandleSubmit}
                className="mt-2 btn btn-primary">
                Ajouter
                 </button>
              
            </form>
         </div>
       </div>
       </div>
    </Fragment>
  );
}