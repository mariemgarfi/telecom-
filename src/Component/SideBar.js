import React from "react";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="app-sidebar sidebar-shadow">
      <div className="app-header__logo">
        <div className="logo-src" />
        <div className="header__pane ml-auto">
          <div>
            <button
              type="button"
              className="hamburger close-sidebar-btn hamburger--elastic"
              data-class="closed-sidebar"
            >
              <span className="hamburger-box">
                <span className="hamburger-inner" />
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="app-header__mobile-menu">
        <div>
          <button
            type="button"
            className="hamburger hamburger--elastic mobile-toggle-nav"
          >
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </button>
        </div>
      </div>
      <div className="app-header__menu">
        <span>
          <button
            type="button"
            className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav"
          >
            <span className="btn-icon-wrapper">
              <i className="fa fa-ellipsis-v fa-w-6" />
            </span>
          </button>
        </span>
      </div>
      <div className="scrollbar-sidebar">
        <div className="app-sidebar__inner">
          <ul className="vertical-nav-menu">
            <li className="app-sidebar__heading">Dashboards</li>
            <li>
              <Link to="index.html" className="mm-active">
                <i className="metismenu-icon pe-7s-rocket" />
                Dashboard Example 1
              </Link>
            </li>
            <li>
              <Link to="/Add_commande" >
                <i className="metismenu-icon pe-7s-rocket" />
                Ajouter commande
              </Link>
            </li>
            <li className="app-sidebar__heading">UI Components</li>
            <li>
              <Link to="#">
                <i className="metismenu-icon pe-7s-diamond" />
              Produits
                <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
              </Link>
              <ul>
                <li>
                  <Link to="/">
                    <i className="metismenu-icon" />
                   Ajouter Produits
                  </Link>
                </li>
                <li>
                  <Link to="Tableproducts">
                    <i className="metismenu-icon"> </i>Tableau de Produit
                  </Link>
                </li>
                <li>
                  <Link to="Add_Categorie">
                    <i className="metismenu-icon" />
                   Ajouter Categorie
                  </Link>
                </li>
                <li>
                  <Link to="TableCategorie">
                    <i className="metismenu-icon" />
                Tableau de Categorie
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="#">
                <i className="metismenu-icon pe-7s-car" />
                Fournisseu
                <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
              </Link>
              <ul>
                <li>
                  <Link to="/Add_fournisseur">
                    <i className="metismenu-icon"> </i>Ajouter Fournisseur
                  </Link>
                </li>
                <li>
                  <Link to="Tablefournisseur">
                    <i className="metismenu-icon"> </i>Tableau de  Fournisseur
                  </Link>
                </li>
                <li>
                  <Link to="Add_commande">
                    <i className="metismenu-icon"> </i>
                    Ajouter Commande
                  </Link>
                </li>
                <li>
                  <Link to="TableCommande">
                    <i className="metismenu-icon"> </i>
                 Tableau de Cammande 
                  </Link>
                </li>
              </ul>
          
            </li>
            <li>
              <Link to="#">
                <i className="metismenu-icon pe-7s-car" />
               Utilisater
                <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
              </Link>
              <ul>

               <li>
              <Link to="Add_User">
                <i className="metismenu-icon pe-7s-display2" />
                Ajouter Utilisater 
              </Link>
                </li>
                <li>
                <Link to="tableUser">
                <i className="metismenu-icon pe-7s-display2" />
              Tableau d'Utilisater
               </Link>
               </li>
            </ul>
            </li>
            <li>
              <Link to="#">
                <i className="metismenu-icon pe-7s-car" />
             Magasin
                <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
              </Link>

              <ul>
               <li>
              <Link to="Addmagasin">
                <i className="metismenu-icon pe-7s-display2" />
                Ajouter Magasin
                </Link>
                </li>
                <li>
                  <Link to="TableMagasin">
                    <i className="metismenu-icon"> </i>
                 Tableau de Magasin
                  </Link>
                </li>
              </ul>
          </li>
        
           </ul>
        </div>
      </div>
    </div>
  );
}
