import "./App.css";
import Add_commande from "./Component/Admin/Add_commande";
import Add_fournisseur from "./Component/Admin/Add_fournisseur";
import Add_magasinier from "./Component/Admin/Add_magasinier";
import Add_products from "./Component/Admin/Add_products";
import Display_fourniseur from "./Component/Admin/Display_fournisseur";
import Tableproducts from "./Component/Admin/Tableproducts";
import TableMagasinier from "./Component/Admin/TableMagasinier";
import NavBar from "./Component/NavBar";
import SideBar from "./Component/SideBar";
import Add_Categorie from "./Component/Admin/Add_Categorie";
import TableCategorie from "./Component/Admin/TableCategorie";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Edit_commande from "./Component/Admin/Edit_commande";
function App() {
  return (
    <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
      <NavBar />

      <div className="app-main">
      <BrowserRouter>

        <SideBar />
        <div className="app-main__outer">
        <Routes>
        <Route path="/Add_commande" element={<Add_commande />}/>
        <Route path="/Edit_commande/:id" element={<Edit_commande />}/>
        </Routes>

        </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
