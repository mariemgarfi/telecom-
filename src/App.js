import "./App.css";
import Add_fournisseur from "./Component/Admin/Add_fournisseur";
import NavBar from "./Component/NavBar";
import SideBar from "./Component/SideBar";

function App() {
  return (
    <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
      <NavBar />

      <div className="app-main">
        <SideBar />
        <div className="app-main__outer">
          <Add_fournisseur/>
          </div>
      </div>
    </div>
  );
}

export default App;
