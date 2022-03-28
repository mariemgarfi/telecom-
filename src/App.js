import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Add_commande from "./Component/Admin/Add_commande";
import Add_fournisseur from "./Component/Admin/Add_fournisseur";

import Add_products from "./Component/Admin/Add_products";
import Display_fourniseur from "./Component/Admin/Display_fournisseur";
import Tableproducts from "./Component/Admin/Tableproducts";
import NavBar from "./Component/NavBar";
import SideBar from "./Component/SideBar";
import Add_Categorie from "./Component/Admin/Add_Categorie";
import TableCategorie from "./Component/Admin/TableCategorie";
import Add_User from "./Component/Admin/Add_User";
import TableUser from "./Component/Admin/TableUser";


function App() {
  return (
    <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
      <NavBar />

      <div className="app-main">


        <BrowserRouter>

          < SideBar />
          <div className="app-main__outer">

            <Routes>
              <Route path='/' element={<Add_products />} />
              <Route path='/Tableproducts' element={<Tableproducts />} />
          
              <Route path='/Add_Categorie' element={<Add_Categorie />} />
              <Route path='/TableCategorie' element={<TableCategorie />} />
              <Route path='/Add_fournisseur' element={<Add_fournisseur />} />
              <Route path='/Display_fourniseur' element={<Display_fourniseur />   } />
              <Route path='/Add_commande' element={<Add_commande />} />
              <Route path='/Add_user' element={<Add_User />} />
              <Route path='/tableUser' element={<TableUser />} />

            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </div>

  );
}

export default App;
