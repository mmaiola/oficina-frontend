import { useState } from "react";

import Sidebar from "./Components/Sidebar";

import Inicio from "./pages/Inicio";
import Dashboard from "./pages/Dashboard";
import Clientes from "./pages/Clientes";
import Veiculos from "./pages/Veiculos";
import Relatorios from "./pages/Relatorios";

function App() {

  const [pagina, setPagina] = useState("Inicio");

  function renderizarPagina() {

    switch (pagina) {

      case "Inicio":
        return <Inicio />;

      case "Dashboard":
        return <Dashboard />;

      case "Clientes":
        return <Clientes />;

      case "Veiculos":
        return <Veiculos />;

      case "Relatorios":
        return <Relatorios />;

      default:
        return <Inicio />;
    }
  }

  return (
    <div style={{ display: "flex" }}>

      <Sidebar pagina={pagina} setPagina={setPagina} />

      <div style={{
        flex: 1,
        padding: "20px",
        background: "#f5f5f5",
        minHeight: "100vh"
      }}>
        {renderizarPagina()}
      </div>

    </div>
  );
}

export default App;