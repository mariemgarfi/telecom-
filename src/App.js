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

function App() {
  return (
    <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
      <NavBar />

      <div className="app-main">
        <SideBar />
        <div className="app-main__outer">
          {/*  <Add_fournisseur/> 
          <Display_fourniseur/>
          <Tableproducts/>
          <Add_commande/> 
           
             <Add_magasinier/>
             <TableMagasinier/> 
             <Add_Categorie />
          <TableCategorie/>*/}
<Add_products/>

        </div>
      </div>
    </div>
  );
}

export default App;
