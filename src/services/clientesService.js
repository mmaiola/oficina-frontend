import api from "./api";

// ⚠️ Ajuste o caminho "/clientes" se o seu @RequestMapping no Java for diferente
export const clientesService = {
  listar: () => api.get("/clientes").then((res) => res.data),
  criar: (cliente) => api.post("/clientes", cliente).then((res) => res.data),
  excluir: (id) => api.delete(`/clientes/${id}`).then((res) => res.data),
};
