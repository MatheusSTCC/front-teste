import axios from "axios";

//const API_URL =  "https://projeto.com.br/"; //remote(produção)
// const API_URL = "http://localhost:8080/"; //local(desenvolvimento) escola
const API_URL = "http://localhost:3000/"; //local(casa do fe)

const mainInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-type": "application/json",
  },
});

const multipartInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-type": "multipart/form-data",
  },
});

const httpCommom = {
  mainInstance,
  multipartInstance,
};

export default httpCommom;
