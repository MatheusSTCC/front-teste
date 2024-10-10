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

  const objectValues = {
    id: null,
    nome: "",
    email: "",
    nivelAcesso: "",
  };
  const currentUser = UsuarioService.getCurrentUser();

  const [usuario, setUsuario] = useState(objectValues);

  const { id } = useParams();
  const _dbRecords = useRef(true);
  const [formData, setFormData] = useState({});
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState();
  const [dataFile, setDataFile] = useState();
  const [chosenImage, setChosenImage] = useState();

  const setFile = (dataFile) => {
    setDataFile(dataFile);
  };

  const setImage = (dataImage) => {
    setChosenImage(dataImage);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  useEffect(() => {
    UsuarioService.findById(id)
      .then((response) => {
        const usuario = response.data;
        setUsuario(usuario);
        console.log(usuario);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const goToAlterarSenha = () => {
    navigate(`/usuarioalterarsenha/` + id);
  };

  const updateUser = (e) => {
    e.preventDefault();
    setSuccessful(false);
    const name = document.getElementById("inputNome").value;

    UsuarioService.update(id, { ...usuario, nome: name }).then(
      (response) => {
        localStorage.removeItem("user");
        localStorage.setItem(
          "user",
          JSON.stringify({ ...usuario, nome: name })
        );
        setMessage(response.data.message);
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
        <Header goto={"/home"} title={"Perfil de Usuário"} logo={logo} />
        <section className="m-1 p-1 shadow-lg">
          <form id="profile" className="form-perfil row g-2 rounded-2 shadow">
            <div className="col-md-12">
              <img
                id="imgperfil"
                src={usuario.foto ? usuario.foto : perfil}
                alt="..."
              />
            </div>
            <div className="col-md-12 text-center">
              <ImageUploaderModal
                setFile={setFile}
                setImage={setImage}
                chosenImage={chosenImage}
              />
            </div>
            <div className="col-md-12 mb-3">
              <label htmlFor="inputNome" className="form-label mb-1 fw-bold">
                Nome:
              </label>
              <input
                type="text"
                className="form-control"
                id="inputNome"
                defaultValue={usuario.nome}
              />
            </div>
            <div className="col-md-12 mb-3">
              <label htmlFor="inputEmail4" className="form-label mb-1 fw-bold">
                Email:
              </label>
              <input
                type="email"
                className="form-control text-center"
                id="inputEmail4"
                readOnly
                defaultValue={usuario.email}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label
                htmlFor="inputnivelAcesso"
                className="form-label mb-1 fw-bold"
              >
                Nível de Acesso:
              </label>
              <input
                type="text"
                className="form-control text-center"
                id="inputnivelAcesso"
                readOnly
                defaultValue={usuario.nivelAcesso}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="inputStatus" className="form-label mb-1 fw-bold">
                Status:
              </label>
              <input
                type="text"
                className="form-control text-center"
                id="inputStatus"
                readOnly
                defaultValue={usuario.statusUsuario}
              />
            </div>

            <div className="col-12 mb-2 d-flex justify-content-between">
              <button type="submit" className="gravar" onClick={updateUser}>
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
          </form>
        </section>
      </div>
    </div>
  );
};

export default UsuarioPerfil;
