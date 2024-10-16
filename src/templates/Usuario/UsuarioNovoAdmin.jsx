import { Link, useNavigate } from "react-router-dom";
import HeaderLogin from "../../components/HeaderLogin/HeaderLogin";
import Sidebar from "../../components/Menu/Menu";
import logo from "../../assets/images/home.png";
import { useEffect, useState } from "react";
import UsuarioService from "../../services/UsuarioService";
import "./UsuarioNovo.css";

const UsuarioNovo = () => {
  // const [nivel, setNivel] = useState();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState();

  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    if (name === "telefone") {
      value = aplicarMascaraTelefone(value);
    }
    console.log(name, value);
    setFormData((formData) => ({ ...formData, [name]: value }));
  };
  /*
    const onChangeType = (e) => {
        console.log(e.target.value)
        setNivel(e.target.value);
    }
*/

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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.passwordConfirm !== formData.password) {
      return setMessage("As senhas não conferem!");
    }
    setSuccessful(false);

    // const estadoNome = estados.find(
    //   (estado) => estado?.id === Number(estadoSelecionado)
    // )?.nome;
    // const cidadeNome = cidades.find(
    //   (cidade) => (cidade) => cidade?.id === Number(cidadeSelecionado)
    // )?.nome;

    formData.telefone = formData.telefone.replace(/\D/g, "");
    // formData.cidade = `${estadoNome}/${cidadeNome}`;
    console.log(formData);
    UsuarioService.create(formData).then(
      (response) => {
        // setMessage(response.data.message);

        // setSuccessful(true);
        alert(response.data.message);
        navigate(-1);
        /*window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
                })*/
      },
      (error) => {
        const message = error.response.data.message;
        setMessage(message);
      }
    );
  };

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="p-3 w-100">
        <HeaderLogin goto={"/usuario"} title={"Novo Usuário"} logo={logo} />
        <section className="pai">
          <form className="filho" onSubmit={handleSubmit}>
            {!successful && (
              <>
                <div className="parte01">
                  <div className="col-md-5">
                    <label
                      htmlFor="inputNome"
                      className="form-label mb-1 fw-bold telefone"
                    >
                      Nome:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputNome"
                      name="nome"
                      value={formData.nome || ""}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-2 telefone">
                    <label
                      htmlFor="inputTelefone"
                      className="form-label mb-1 fw-bold"
                    >
                      Telefone:
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
                </div>

                <div className="parte02">
                  <div className="col-md-2">
                    <label
                      htmlFor="inputCpf"
                      className="form-label mb-1 fw-bold"
                    >
                      CPF:
                    </label>

                    <input
                      name="cpf"
                      type="text"
                      className="form-control"
                      id="inputcpf"
                      placeholder="cpf"
                      onChange={handleChange}
                      maxLength={11}
                      value={formData.cpf || ""}
                    />
                  </div>

                  <div className="col-md-5 email">
                    <label
                      htmlFor="inputEmail"
                      className="form-label mb-1 fw-bold"
                    >
                      Email:
                    </label>
                    <input
                      type="email"
                      className="form-control "
                      id="inputEmail"
                      name="email"
                      value={formData.email || ""}
                      onChange={(e) => {
                        if (message) {
                          setMessage("");
                        }

                        handleChange(e);
                      }}
                    />
                  </div>
                </div>

                <div className="parte03">
                  <div className="col-md-5">
                    <label
                      htmlFor="inputEmail"
                      className="form-label mb-1 fw-bold"
                    >
                      Senha:
                    </label>
                    <input
                      type="password"
                      className="form-control "
                      id="inputPassword"
                      name="password"
                      value={formData.password || ""}
                      onChange={(e) => {
                        if (message) {
                          setMessage("");
                        }
                        handleChange(e);
                      }}
                    />
                  </div>
                  <div className="col-md-5 confirmpassword">
                    <label
                      htmlFor="inputEmail"
                      className="form-label mb-1 fw-bold"
                    >
                      Confirmação de senha:
                    </label>
                    <input
                      type="password"
                      className="form-control "
                      id="passwordConfirm"
                      name="passwordConfirm"
                      value={formData.passwordConfirm || ""}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-5 confirmpassword">
                  <label
                    htmlFor="inputEmail"
                    className="form-label mb-1 fw-bold"
                  >
                    Cidade:
                  </label>
                  <input
                    type="cidade"
                    className="form-control "
                    id="cidade"
                    name="cidade"
                    value={formData.cidade || ""}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-4 my-3">
                  <label
                    htmlFor="inputAcesso"
                    className="form-label mb-1 fw-bold"
                  >
                    Acesso:
                  </label>
                  <select
                    id="inputAcesso"
                    name={"nivelAcesso"}
                    className="form-select"
                    value={formData.nivelAcesso || ""}
                    onChange={handleChange}
                  >
                    <option value={"MECANICO"}>MECANICO</option>
                    <option value={"ADMIN"}>ADMIN</option>
                  </select>
                </div>

                <div className="col-md-5 textarea">
                  <label
                    htmlFor="descricao"
                    className="form-label mb-1 fw-bold"
                  >
                    Descrição:
                  </label>
                  <textarea
                    placeholder="Conte mais sobre você e sobre suas experiências"
                    name="descricao"
                    id="descricao"
                    cols="140"
                    rows="3"
                    onChange={handleChange}
                  />
                </div>

                {/*      
                <p id="passwordVisibility" onClick={togglePassword}>
                  Mostrar
                </p>*/}

                {/* <div className="col-md-2">
                  <label
                    htmlFor="inputAcesso"
                    className="form-label mb-1 fw-bold"
                  >
                    Acesso:
                  </label>
                  <select
                    id="inputAcesso"
                    className="form-select"
                    name="nivelAcesso"
                    defaultValue={""}
                    onChange={(e) => handleChange(e)}
                  >
                    <option value={""} disabled>
                      Nível de Acesso...
                    </option>
                    <option value={"USER"}>USER</option>
                    <option value={"ADMIN"}>ADMIN</option>
                  </select>
                </div> */}

                <div className="send01">
                  <div className="paigravar">
                    <button type="submit" className="gravar">
                      Gravar
                    </button>
                  </div>

                  <button
                    type="button"
                    className="voltarv2"
                    onClick={() => navigate(-1)}
                  >
                    Voltar
                  </button>
                </div>
              </>
            )}
            {message && (
              <div className="m-1">
                <div
                  className={
                    "text-center h4 fst-italic  rounded-2 border border-5 " +
                    (successful ? "border-success" : "border-danger")
                  }
                >
                  {message}
                </div>
              </div>
            )}
          </form>
        </section>
      </div>
    </div>
  );
};

export default UsuarioNovo;
