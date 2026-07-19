function Dashboard() {

  return (
    <div>

      <h1>Dashboard</h1>

      <div style={{
        display: "flex",
        gap: "20px",
        marginTop: "20px"
      }}>

        <div style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          width: "200px"
        }}>
          <h3>Clientes</h3>
          <p>12 cadastrados</p>
        </div>

        <div style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          width: "200px"
        }}>
          <h3>Veículos</h3>
          <p>8 cadastrados</p>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;