
import React from 'react'
export default function Display_fourniseur() {
  const data = [
    {
      nom: "",
      prenom: "",
      email: "",
      tel: "",
      adress: "",
      ville: "",
      etat: "",
      code_postal: "",
      poste: "",
      site_web: "",
    },
  ]
  return (
    <div>
      <  div className="row">
        <div className="col-lg-6">
          <div className="main-card mb-3 card">
            <div className="card-body" >
              <div className="page-title-icon">
                <i className="utilisateurs pe-7s"> </i>
              </div>
              <h5 className="card-title">Simple table</h5>
              <table className="mb-0 table">
                <thead>
                  <tr>
                    <th scope="col">Nom</th>
                    <th scope="col">Prénom</th>
                    <th scope="col">Email</th>
                    <th scope="col">poste occupé</th>
                    <th scope="col">site web</th>

                    <th scope='col'>Tel</th>
                    <th scope='col'>Address</th>
                    <th scope='col'>Ville</th>
                    <th scope='col'>Etat</th>
                    <th scope='col'>Code Postal</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((data, i) => (
                    <tr key={i}>
                      <th>{data.nom}</th>
                      <td>{data.prenom}</td>
                      <td>{data.email}</td>
                      <td>{data.poste}</td>
                      <td>{data.site_web}</td>
                      <td>{data.tel}</td>
                      <td>{data.adress}</td>
                      <td>{data.ville}</td>
                      <td>{data.etat}</td>
                      <td>{data.code_postal}</td>

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
