import http from "../common/http-common";
const API_URL = "usuario/";

const findAll = () => {
  return http.mainInstance.get(API_URL + "findAll");
};

const findById = (id) => {
  return http.mainInstance.get(API_URL + `findById/${id}`);
};

const signup = (nome, email, password) => {
  return http.mainInstance.post(API_URL + "signup", {
    nome,
    email,
    password,
  });
};

const signin = async (email, senha) => {
  const response = await http.mainInstance.post(API_URL + "signin", {
    email,
    senha,
  });
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const create = async (data) => {
  const formData = new FormData();

  formData.append("nome", data.nome);
  formData.append("email", data.email);
  formData.append("nivelAcesso", data.nivelAcesso);
  formData.append("senha", data.password);
  formData.append("descricao", data.descricao);
  formData.append("cidade", data.cidade);
  formData.append("telefone", data.telefone);
  formData.append("cpf", data.cpf);

  return http.mainInstance.post(API_URL + "create", formData);
};

const createAdmin = async (data) => {
  const formData = new FormData();

  formData.append("nome", data.nome);
  formData.append("email", data.email);
  formData.append("nivelAcesso", data.nivelAcesso);
  formData.append("senha", data.password);
  formData.append("descricao", data.descricao);
  formData.append("cidade", data.cidade);
  formData.append("telefone", data.telefone);
  formData.append("cpf", data.cpf);

  return http.mainInstance.post(API_URL + "admin/create", formData);
};

const alterar = (id, data) => {
  return http.multipartInstance.put(API_URL + `alterar/${id}`, data);
};
const alterarPeloAdmin = (id, data) => {
  return http.mainInstance.put(API_URL + `admin/alterar/${id}`, data);
};

const update = (id, data) => {
  return http.mainInstance.put(API_URL + `update/${id}`, data);
};

const alterarSenha = (id, data) => {
  const formData = new FormData();
  formData.append("senha", data.senha);

  return http.mainInstance.put(API_URL + `alterarSenha/${id}`, formData);
};

const findByNome = (nome) => {
  return http.mainInstance.get(API_URL + `findByNome?nome=${nome}`);
};

const UsuarioService = {
  findAll,
  findById,
  signup,
  signin,
  logout,
  getCurrentUser,
  create,
  update,
  alterar,
  alterarSenha,
  findByNome,
  alterarPeloAdmin,
  createAdmin,
};

export default UsuarioService;
