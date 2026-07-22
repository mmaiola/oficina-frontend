import { useState } from "react";
import "./Sidebar.css";

function Sidebar({ pagina, setPagina }) {

  const [aberta, setAberta] = useState(true);

  return (
    <div className={aberta ? "sidebar aberta" : "sidebar fechada"}>

      <button
        className="menu-btn"
        onClick={() => setAberta(!aberta)}
      >
        ☰
      </button>


      {aberta && <h2>Oficina</h2>}


      <button
        className={pagina === "Inicio" ? "ativo" : ""}
        onClick={() => setPagina("Inicio")}
      >
        🏠 {aberta && "Inicio"}
      </button>


      <button
        className={pagina === "Dashboard" ? "ativo" : ""}
        onClick={() => setPagina("Dashboard")}
      >
        📊 {aberta && "Dashboard"}
      </button>


      <button
        className={pagina === "Clientes" ? "ativo" : ""}
        onClick={() => setPagina("Clientes")}
      >
        👥 {aberta && "Clientes"}
      </button>


      <button
        className={pagina === "Veiculos" ? "ativo" : ""}
        onClick={() => setPagina("Veiculos")}
      >
        🚗 {aberta && "Veículos"}
      </button>


      <button
        className={pagina === "Relatorios" ? "ativo" : ""}
        onClick={() => setPagina("Relatorios")}
      >
        📈 {aberta && "Relatórios"}
      </button>


    </div>
  );
}

export default Sidebar;