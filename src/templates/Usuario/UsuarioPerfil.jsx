import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/SideBar/Sidebar";
import logo from "../../assets/images/home.png";
import perfil from "../../assets/images/perfil_blz.jpg";
import { useEffect, useRef, useState } from "react";
import UsuarioService from "../../services/UsuarioService";
import "./UsuarioPerfil.css";
import ImageUploaderModal from "../../components/ImageUploader/ImageUploaderModal";

const UsuarioPerfil = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const _dbRecords = useRef(true);
  const [message, setMessage] = useState();
  const [successful, setSuccessful] = useState(false);
  const [cidade, setCidade] = useState("");
  const [descricao, setDescricao] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [foto, setFoto] = useState("");
  const [file, setFile] = useState(null);
  const [chosenImage, setChosenImage] = useState();
  const [loading, setLoading] = useState(true); // Estado de loading

  const setImage = (dataImage) => {
    setChosenImage(dataImage);
  };
  const currentUser = UsuarioService.getCurrentUser();
  useEffect(() => {
    UsuarioService.findById(id)
      .then((response) => {
        const usuario = response.data;

        setNome(usuario.nome);
        setEmail(usuario.email);

        if (usuario.foto?.data) {
          const byteArray = new Uint8Array(usuario.foto.data);
          const blob = new Blob([byteArray], { type: "image/png" });
          const url = URL.createObjectURL(blob);
          setFoto(url);
        }
        setCidade(usuario?.mecanico?.cidade);
        setDescricao(usuario?.mecanico?.descricao);

        setTelefone(aplicarMascaraTelefone(usuario?.mecanico?.telefone));
        setLoading(false); // Carregamento concluído
      })
      .catch((error) => {
        console.log(error);
        setLoading(false); // Mesmo em caso de erro, o carregamento é concluído
      });
  }, [id]);

  const goToAlterarSenha = () => {
    navigate(`/usuarioalterarsenha/` + id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");
    setSuccessful(false);
    const formData = new FormData();
    if (file) {
      formData.append("file", file);
    }

    formData.append(
      "dados",
      JSON.stringify({
        nome,
        email,
        telefone,
        descricao,
        cidade,
        telefone: telefone.replace(/\D/g, ""),
      })
    );

    UsuarioService.alterar(id, formData).then(
      (response) => {
        localStorage.setItem(
          "user",
          JSON.stringify({
            ...currentUser,
            nome,
            email,
            foto: file ? file : currentUser.foto,
            mecanico: {
              ...currentUser.mecanico,
              telefone,
              descricao,
              cidade,
            },
          })
        );
        alert(response.data.message);
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        console.log(error);
        setMessage(resMessage);
        setSuccessful(false);
      }
    );
  };

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
    <div className="d-flex">
      <Sidebar />
      <div className="p-3 w-100">
        <Header goto={"/home"} title={"Perfil de Usuário"} logo={logo} />
        <section className="m-1 p-1 shadow-lg">
          {loading ? ( // Exibe o loading enquanto os dados estão sendo carregados
            <div className="loading">
              <p style={{ color: "white" }}>Carregando...</p>
            </div>
          ) : (
            <form
              id="profile"
              className="form-perfil row g-2 rounded-2 shadow"
              onSubmit={handleSubmit}
            >
              {!successful && (
                <>
                  <div className="col-md-12">
                    {chosenImage ? (
                      <img id="imgperfil" src={chosenImage} alt="..." />
                    ) : (
                      <img
                        id="imgperfil"
                        src={foto ? foto : perfil}
                        alt="..."
                      />
                    )}
                  </div>
                  <div className="col-md-12 text-center">
                    <ImageUploaderModal
                      setFile={setFile}
                      setImage={setImage}
                      chosenImage={chosenImage}
                    />
                  </div>
                  <div className="col-md-12 mb-3">
                    <label
                      htmlFor="inputNome"
                      className="form-label mb-1 fw-bold"
                    >
                      Nome:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputNome"
                      name="nome"
                      value={nome || ""}
                      onChange={(e) => {
                        setNome(e.target.value);
                      }}
                    />
                  </div>
                  <div className="col-md-12 mb-3">
                    <label
                      htmlFor="inputEmail"
                      className="form-label mb-1 fw-bold"
                    >
                      Email:
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail"
                      name="email"
                      value={email || ""}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>

                  {currentUser.nivelAcesso === "MECANICO" && (
                    <>
                      <div className="col-md-6 mb-3">
                        <label
                          htmlFor="inputTelefone"
                          className="form-label mb-1 fw-bold"
                        >
                          Telefone:
                        </label>
                        <input
                          type="text"
                          className="form-control text-center"
                          id="inputTelefone"
                          name="telefone"
                          value={telefone || ""}
                          onChange={(e) => {
                            setTelefone(aplicarMascaraTelefone(e.target.value));
                          }}
                          maxLength={15}
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label
                          htmlFor="inputCidade"
                          className="form-label mb-1 fw-bold"
                        >
                          Cidade:
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputCidade"
                          name="cidade"
                          value={cidade || ""}
                          onChange={(e) => {
                            setCidade(e.target.value);
                          }}
                        />
                      </div>
                      <div className="col-md-12 mb-3">
                        <label
                          htmlFor="inputDescricao"
                          className="form-label mb-1 fw-bold"
                        >
                          Descrição:
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputDescricao"
                          name="descricao"
                          value={descricao || ""}
                          onChange={(e) => {
                            setDescricao(e.target.value);
                          }}
                        />
                      </div>
                    </>
                  )}

                  <div className="col-12 mb-2 d-flex justify-content-between">
                    <button type="submit" className="gravar">
                      Gravar Alterações
                    </button>

                    <button
                      type="button"
                      onClick={goToAlterarSenha}
                      className="alterarsenha"
                    >
                      Alterar a Senha
                    </button>
                  </div>
                </>
              )}
              {message && (
                <div className="m-1">
                  <div
                    className={
                      "text-center h4 fst-italic py-4 rounded-2 " +
                      (successful ? "bg-success" : "bg-danger")
                    }
                  >
                    {message}
                  </div>
                </div>
              )}
            </form>
          )}
        </section>
      </div>
    </div>
  );
};

export default UsuarioPerfil;
