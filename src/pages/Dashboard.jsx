import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {

  const [clientes, setClientes] = useState(0);
  const [veiculos, setVeiculos] = useState(0);

  useEffect(() => {
    carregarDashboard();
  }, []);

  async function carregarDashboard() {
    try {
      const respostaClientes = await axios.get("http://localhost:8080/api/clientes");
      const respostaVeiculos = await axios.get("http://localhost:8080/api/veiculos");

      setClientes(respostaClientes.data.length);
      setVeiculos(respostaVeiculos.data.length);

    } catch (erro) {
      console.error("Erro ao carregar dashboard:", erro);
    }
  }

  return (
    <div>

      <h1>Dashboard</h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "20px",
        }}
      >

        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            width: "200px",
          }}
        >
          <h3>Clientes</h3>
          <p>{clientes} cadastrados</p>
        </div>

        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            width: "200px",
          }}
        >
          <h3>Veículos</h3>
          <p>{veiculos} cadastrados</p>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;