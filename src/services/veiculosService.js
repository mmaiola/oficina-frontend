import api from "./api";

// ⚠️ Ajuste o caminho "/veiculos" se o seu @RequestMapping no Java for diferente
export const veiculosService = {
  listar: () => api.get("/veiculos").then((res) => res.data),
  criar: (veiculo) => api.post("/veiculos", veiculo).then((res) => res.data),
  excluir: (id) => api.delete(`/veiculos/${id}`).then((res) => res.data),
};
