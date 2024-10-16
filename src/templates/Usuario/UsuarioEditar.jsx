import { Link, useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Menu/Menu";
import logo from "../../assets/images/home.png";
import { useEffect, useRef, useState } from "react";
import UsuarioService from "../../services/UsuarioService";

const UsuarioEditar = () => {
  const objectValues = {
    id: null,
    nome: "",
    email: "",
    nivelAcesso: "",
  };

  const [usuario, setUsuario] = useState(objectValues);

  const { id } = useParams();
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState();
  console.log("dados", usuario);

  useEffect(() => {
    UsuarioService.findById(id)
      .then((response) => {
        const usuario = response.data;
        setUsuario(usuario);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const atualizarAdmin = (e) => {
    e.preventDefault();

    UsuarioService.alterarPeloAdmin(id, usuario).then(
      (response) => {
        alert(response.data.message);
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        // console.log(error);
        setMessage(resMessage);
        setSuccessful(false);
      }
    );
  };

  /*
        A propriedade 'value' para um campo de formulário sem um manipulador 'onChange', 
        faz com que o campo seja renderizado como somente de leitura. 
        Se o campo deve ser mutável, deve ser utilizada a propriedade 'defaultValue'. 
        Caso contrário, deve ser definida 'onChange' ou 'readOnly'.
    */
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="p-3 w-100">
        <Header goto={"/usuario"} title={"Editar Usuário"} logo={logo} />
        <section className="m-2 p-2 shadow-lg">
          <form
            onSubmit={atualizarAdmin}
            className="row g-2 m-5 p-2 rounded-2 shadow"
          >
            <div className="col-md-5">
              <label htmlFor="inputNome" className="form-label mb-1 fw-bold">
                Nome:
              </label>
              <input
                type="text"
                className="form-control"
                id="inputNome"
                value={usuario.nome}
                onChange={(e) => {
                  setUsuario((oldState) => ({
                    ...oldState,
                    nome: e.target.value,
                  }));
                }}
              />
            </div>
            <div className="col-md-5">
              <label htmlFor="inputEmail4" className="form-label mb-1 fw-bold">
                Email:
              </label>
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                value={usuario.email}
                onChange={(e) => {
                  setUsuario((oldState) => ({
                    ...oldState,
                    email: e.target.value,
                  }));
                }}
              />
            </div>

            <div className="col-md-4 my-3">
              <label htmlFor="inputStatus" className="form-label mb-1 fw-bold">
                Status:
              </label>
              <input
                type="text"
                className="form-control"
                id="inputStatus"
                readOnly
                value={usuario.statusUsuario}
              />
            </div>
            <div className="col-md-4 my-3">
              <label htmlFor="inputAcesso" className="form-label mb-1 fw-bold">
                Acesso:
              </label>
              <select
                id="inputAcesso"
                className="form-select"
                readOnly
                value={usuario.nivelAcesso}
                onChange={(e) => {
                  setUsuario((oldState) => ({
                    ...oldState,
                    nivelAcesso: e.target.value,
                  }));
                }}
              >
                <option value={"MECANICO"}>MECANICO</option>
                <option value={"ADMIN"}>ADMIN</option>
              </select>
            </div>

            <div className="col-12 mb-2 d-flex justify-content-between">
              <button className="btn btn-primary" onClick={atualizarAdmin}>
                Gravar Alterações
              </button>
              <button
                type="button"
                className="btn btn-warning"
                onClick={() => {
                  setUsuario((oldState) => ({
                    ...oldState,
                    statusUsuario: "ATIVO",
                  }));
                }}
              >
                Reativar
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => {
                  setUsuario((oldState) => ({
                    ...oldState,
                    statusUsuario: "INATIVO",
                  }));
                }}
              >
                Inativar Conta
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default UsuarioEditar;
