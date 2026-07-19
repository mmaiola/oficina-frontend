function Sidebar({ pagina, setPagina }) {

  const sidebarStyle = {
    width: "250px",
    background: "#1e1e2f",
    color: "white",
    padding: "20px",
    minHeight: "100vh"
  };

  const botaoStyle = (ativa) => ({
    width: "100%",
    padding: "12px",
    marginBottom: "10px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    background: ativa ? "#6c63ff" : "#2d2d44",
    color: "white",
    textAlign: "left",
    fontSize: "16px"
  });

  return (
    <div style={sidebarStyle}>

      <h2>Oficina</h2>

      <button
        style={botaoStyle(pagina === "Inicio")}
        onClick={() => setPagina("Inicio")}
      >
        Inicio
      </button>

      <button
        style={botaoStyle(pagina === "Dashboard")}
        onClick={() => setPagina("Dashboard")}
      >
        Dashboard
      </button>

      <button
        style={botaoStyle(pagina === "Clientes")}
        onClick={() => setPagina("Clientes")}
      >
        Clientes
      </button>

      <button
        style={botaoStyle(pagina === "Veiculos")}
        onClick={() => setPagina("Veiculos")}
      >
        Veículos
      </button>

      <button
        style={botaoStyle(pagina === "Relatorios")}
        onClick={() => setPagina("Relatorios")}
      >
        Relatórios
      </button>

    </div>
  );
}

export default Sidebar;