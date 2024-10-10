import { Link, Navigate, useNavigate, useNavigation } from "react-router-dom";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Menu/Menu";
import logo from "../../assets/images/home.png";

const Usuario = () => {
  const navigate =useNavigate()
    function handleBack() {
      navigate(-1)
    }
  
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="p-3 w-100">
        <Header goto={"/home"} title={"Usuário"} logo={logo} />
        <section className="m-2 p-2 shadow-lg">
          <div className="d-flex justify-content-around lusu">
            <button type="submit" className="voltar2" onClick={handleBack}>Voltar</button>
            <Link to={"/usuarionovo"} className="btn btn-lg btn-primary">
              Novo Usuário
            </Link>
            <Link to={"/usuarioslista"} className="btn btn-lg btn-warning">
              Lista de Usuários
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Usuario;
