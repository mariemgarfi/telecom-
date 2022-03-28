import React, { useEffect, useState } from "react";
import Modal_delete from "./Modal_delete";
import Banner from "../Banner";
import axios from "axios";

export default function Tableproducts() {
  const [Products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const [ProductsSelected, setProductsSelected] = useState({});
 
  const handleClickOpen = (products) => {
      setProductsSelected(products)
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
      getAllProducts();
    };

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = () => {
    axios
      .get("http://localhost:3200/api/get_Products")
      .then((result) => {
        setProducts(result.data.data);
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

                    <th>categorie article</th>
                    <th>code</th>
                    <th>type</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {Products.map((value, i) => (
                    <tr key={i}>
                      <td>{value.categorie}</td>
                      <td>{value.Code_article}</td>
                      <td>{value.type}</td>
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
              {open? <Modal_delete products={ProductsSelected} open={open}  onClose={handleClose}/> :null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
