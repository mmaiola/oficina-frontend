import { useEffect, useState } from "react";
import { veiculosService } from "../services/veiculosService";

function Veiculos() {

  const [mostrarForm, setMostrarForm] = useState(false);

  const [veiculos, setVeiculos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  const [placa, setPlaca] = useState("");
  const [modelo, setModelo] = useState("");
  const [marca, setMarca] = useState("");

  useEffect(() => {
    carregarVeiculos();
  }, []);

  function carregarVeiculos() {
    setCarregando(true);
    veiculosService
      .listar()
      .then((dados) => setVeiculos(dados))
      .catch((err) => {
        console.error(err);
        setErro("Não foi possível carregar os veículos. Verifique se o back está rodando.");
      })
      .finally(() => setCarregando(false));
  }

  async function cadastrarVeiculo(e) {
    e.preventDefault();

    const novoVeiculo = { placa, modelo, marca };

    try {
      await veiculosService.criar(novoVeiculo);
      setPlaca("");
      setModelo("");
      setMarca("");
      setMostrarForm(false);
      carregarVeiculos();
    } catch (err) {
      console.error(err);
      setErro("Erro ao cadastrar veículo.");
    }
  }

  async function removerVeiculo(id) {
    try {
      await veiculosService.excluir(id);
      carregarVeiculos();
    } catch (err) {
      console.error(err);
      setErro("Erro ao excluir veículo.");
    }
  }

  return (
    <div>

      <h1>Veículos</h1>

      {erro && <p style={{ color: "red" }}>{erro}</p>}

      <button onClick={() => setMostrarForm(!mostrarForm)}>
        {mostrarForm ? "Fechar" : "Novo Veículo"}
      </button>

      {mostrarForm && (

        <form
          onSubmit={cadastrarVeiculo}
          style={{
            marginTop: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            maxWidth: "400px"
          }}
        >

          <input
            type="text"
            placeholder="Placa"
            value={placa}
            onChange={(e) => setPlaca(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Marca"
            value={marca}
            onChange={(e) => setMarca(e.target.value)}
          />

          <input
            type="text"
            placeholder="Modelo"
            value={modelo}
            onChange={(e) => setModelo(e.target.value)}
          />



        

          <input
            type="text"
            placeholder="Modelo"
            value={modelo}
            onChange={(e) => setModelo(e.target.value)}
          />



          <button type="submit">
            Cadastrar
          </button>

        </form>
      )}

      <div style={{ marginTop: "30px" }}>

        {carregando && <p>Carregando...</p>}

        {!carregando && veiculos.length === 0 && <p>Nenhum veículo cadastrado ainda.</p>}

        {veiculos.map((veiculo) => (

          <div
            key={veiculo.id}
            style={{
              background: "white",
              padding: "15px",
              borderRadius: "10px",
              marginBottom: "10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >

            <div>
              <h3>{veiculo.placa}</h3>
              <p>Marca: {veiculo.marca}</p>
              <p>Modelo: {veiculo.modelo}</p>
              <p>Ano: {veiculo.ano}</p>
              <p>Cor: {veiculo.cor}</p>
              <p>Cliente: {veiculo.clienteId}</p>
            </div>

            <button onClick={() => removerVeiculo(veiculo.id)}>
              Excluir
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Veiculos;
