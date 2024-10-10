import { useState } from "react";
import { useNavigate } from "react-router-dom";

import MensagemService from "../../services/MensagemService";
import logo from "../../assets/images/logoprin.png";
import usu from "../../assets/images/usuário.png";
import "./FaleConosco.css";
import { Link } from "react-router-dom";
import Menu from "../../components/Menu/Menu";

const FaleConosco = () => {
  const objectValues = {
    email: "",
    emissorMensagem: "",
    texto: "",
    telefone: "",
  };
  const [mensagem, setMensagem] = useState(objectValues);
  const [formData, setFormData] = useState({});
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;

    if (name === "telefone") {
      value = aplicarMascaraTelefone(value);
    }

    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  const handleBack = () => {
    navigate(-1); 
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessful(false);
    formData.telefone = extrairDigitos(formData.telefone);
    MensagemService.create(formData).then(
      (response) => {
        setMessage(response.data.message);
        setSuccessful(true);
        navigate("/principal");
      },
      (error) => {
        const message = error.response.data.message;
        setMessage(message);
      }
    );
  };

  function extrairDigitos(input) {
    return input.replace(/\D/g, "");
  }

  const aplicarMascaraTelefone = (input) => {
    let value = input.replace(/\D/g, "");
    if (value.length > 10) {
      value = value.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
    } else if (value.length > 6) {
      value = value.replace(/^(\d{2})(\d{4})(\d{4})$/, "($1) $2-$3");
    } else if (value.length > 2) {
      value = value.replace(/^(\d{2})(\d{1,4})$/, "($1) $2");
    } else if (value.length === 2) {
      value = value.replace(/^(\d{2})/, "($1)");
    }

    return value;
  };

  return (
    <div className="justify-content-center align-items-center">
      <Menu />

      {/*CENTRAL DE AJUDA*/}

      <h1>Central de Ajuda</h1>
      <hr />

      {/*Reporte o seu erro*/}

      <h4>Reporte o seu erro</h4>
      <form onSubmit={handleSubmit}>
        <div className="row g-3 align-items-center">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email
            </label>
            <input
              name="email"
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Nome completo
            </label>
            <input
              name="emissorMensagem"
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Nome completo"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Telefone
            </label>
            <input
              name="telefone"
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Telefone com ddd"
              onChange={handleChange}
              maxLength={15}
              value={formData.telefone}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Relate aqui seu problema
            </label>
            <textarea
              name="texto"
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              onChange={handleChange}
            />
          </div>

          <div className="buttonpai"> 
          <button type="submit" className="enviar">Enviar</button>
          <button type="submit" className="voltar" onClick={handleBack}>voltar</button>

          </div>
        </div>
      </form>
    </div>
  );
};

export default FaleConosco;
