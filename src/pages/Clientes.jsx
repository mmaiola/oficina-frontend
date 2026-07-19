import { useEffect, useState } from "react";
import { clientesService } from "../services/clientesService";

function Clientes() {

  const [mostrarForm, setMostrarForm] = useState(false);

  const [clientes, setClientes] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, settelefone] = useState("");

  useEffect(() => {
    carregarClientes();
  }, []);

  function carregarClientes() {
    setCarregando(true);
    clientesService
      .listar()
      .then((dados) => setClientes(dados))
      .catch((err) => {
        console.error(err);
        setErro("Não foi possível carregar os clientes. Verifique se o back está rodando.");
      })
      .finally(() => setCarregando(false));
  }

  async function cadastrarCliente(e) {
    e.preventDefault();

    const novoCliente = { nome, cpf, telefone };

    try {
      await clientesService.criar(novoCliente);
      setNome("");
      setCpf("");
      settelefone("");
      setMostrarForm(false);
      carregarClientes(); // recarrega a lista com o cliente novo já vindo do banco
    } catch (err) {
      console.error(err);
      setErro("Erro ao cadastrar cliente.");
    }
  }

  async function removerCliente(id) {
    try {
      await clientesService.excluir(id);
      carregarClientes();
    } catch (err) {
      console.error(err);
      setErro("Erro ao excluir cliente.");
    }
  }

  return (
    <div>

      <h1>Clientes</h1>

      {erro && <p style={{ color: "red" }}>{erro}</p>}

    <button
  className={`btn-cliente ${mostrarForm ? "fechar" : "novo"}`}
  onClick={() => setMostrarForm(!mostrarForm)}
>
  {mostrarForm ? "✖ Fechar" : "➕ Novo Cliente"}
</button>

      {mostrarForm && (

        <form
          onSubmit={cadastrarCliente}
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
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="CPF"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="telefone"
            value={telefone}
            onChange={(e) => settelefone(e.target.value)}
          />

          <button type="submit">
            Cadastrar
          </button>

        </form>
      )}

      <div style={{ marginTop: "30px" }}>

        {carregando && <p>Carregando...</p>}

        {!carregando && clientes.length === 0 && <p>Nenhum cliente cadastrado ainda.</p>}

        {clientes.map((cliente) => (

          <div
            key={cliente.id}
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
              <h3>{cliente.nome}</h3>
              <p>CPF: {cliente.cpf}</p>
              <p>telefone: {cliente.telefone}</p>
            </div>

            <button onClick={() => removerCliente(cliente.id)}>
              Excluir
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Clientes;
