import "./Principal.css";

import c1 from "../../assets/images/Carrocel 1.jpg";
import c2 from "../../assets/images/Carrocel 2.jpg";
import c3 from "../../assets/images/Carrocel 3.jpg";
import logo from "../../assets/images/logoprin.png";
import usu from "../../assets/images/usuário.png";
import mec01 from "../../assets/images/mecânico 01.jpg";

import mec02 from "../../assets/images/mecânico 02.jpg";
import mec03 from "../../assets/images/mecânico 03.jpg";
import quems from "../../assets/images/quem somos.jpg";
import cincoestrela from "../../assets/images/5 estrelas.png";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import UsuarioService from "../../services/UsuarioService";
import Menu from "../../components/Menu/Menu";
const Principal = () => {
  const currentUser = UsuarioService.getCurrentUser();
  const navigate = useNavigate();
  const logout = () => {
    UsuarioService.logout();
    navigate("/");
  };
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner" style={{ height: "800px" }}>
          <div className="carousel-item active">
            <img
              src={c1}
              className="d-block w-100 "
              style={{ height: "800px" }}
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
          <div className="carousel-item">
            <img
              src={c2}
              className="d-block w-100"
              style={{ height: "800px" }}
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
          <div className="carousel-item">
            <img
              src={c3}
              className="d-block w-100"
              style={{ height: "800px" }}
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Menu*/}
      <Menu />

      {/*mecanicos*/}
      <div className="mec">
        <h1>Nossos mecânicos</h1>

        <div className="mecanicos">
          <div className="mecanicos1">
            <img id="imgmec" src={mec01} alt="" />
            <img id="estrelas" src={cincoestrela} alt="" />

            <p>
            Olá! Sou Carlos, mecânico com 20 anos de experiência em serviços móveis. 
            Ofereço consertos e manutenções de veículos na sua casa ou trabalho, com ferramentas profissionais e atendimento personalizado. 
            Conte comigo para cuidar do seu carro com transparência e flexibilidade. 
            </p>
          </div>

          <div className="mecanicos2">
            <img id="imgmec" src={mec02} alt="" />
            <img id="estrelas" src={cincoestrela} alt="" />

            <p>
            Olá! Sou Robson, mecânico especializado em serviços automotivos a domicílio. 
            Com anos de experiência, ofereço atendimento personalizado e de alta qualidade, desde diagnósticos até reparos. 
            Conte comigo para um serviço rápido e confiável. Robson, seu mecânico de confiança! 
            </p>
          </div>

          <div className="mecanicos3">
            <img id="imgmec" src={mec03} alt="" />
            <img id="estrelas" src={cincoestrela} alt="" />

            <p>
            Olá! Sou Evandro, mecânico especializado em serviços automotivos a domicílio. 
            Com anos de experiência, ofereço atendimento personalizado e de alta qualidade, desde diagnósticos até reparos. 
            Conte comigo para um serviço rápido e confiável. Evandro, seu mecânico de confiança! 
            </p>
          </div>
        </div>
      </div>

      <div className="quem">
        <img src={quems} alt="quem" />

        <p>
        A SOS Mecânica é uma empresa inovadora que conecta usuários a mecânicos especializados em atendimento a domicílio. 
        Em apenas um ano de funcionamento, já conquistamos a confiança de nossos clientes ao oferecer serviços automotivos de alta qualidade diretamente na casa ou local de trabalho dos nossos usuários. 
        Nossa missão é proporcionar comodidade e eficiência, eliminando a necessidade de deslocamento até oficinas tradicionais.
Com uma equipe de mecânicos experientes e bem treinados, garantimos diagnósticos precisos, reparos rápidos e manutenção completa para que seu veículo esteja sempre em perfeitas condições. 
Além disso, prezamos pela transparência e flexibilidade no agendamento, adaptando-nos às necessidades dos nossos clientes.
Na SOS Mecânica, acreditamos que cuidar do seu carro deve ser uma experiência prática e sem complicações. 
Por isso, estamos sempre prontos para atender com profissionalismo e um sorriso no rosto. Confie na SOS Mecânica para manter seu veículo em ótimo estado, onde quer que você esteja!
Se precisar de mais alguma coisa, estou à disposição!
        </p>
      </div>

      {/*FOOTER*/}

      {/* Footer */}
      <footer className="text-center text-lg-start bg-body-dark text-muted ">
        <section className="footerfilho">
          <div>
            <a href="" className="me-4 text-reset ">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="" className="me-4 text-reset ">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="" className="me-4 text-reset ">
              <i className="fab fa-google"></i>
            </a>
            <a href="" className="me-4 text-reset ">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="" className="me-4 text-reset ">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="" className="me-4 text-reset ">
              <i className="fab fa-github"></i>
            </a>
          </div>
          {/* Right */}
        </section>

        {/* Section: Links  */}
        <section className="">
          <div className="container text-center text-md-start mt-5 text-light">
            {/* Grid row */}
            <div className="mt-3">
              {/* Grid column */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 text-light">
                {/* Content */}
              
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="servicos">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Serviços</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Troca de óleo
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Troca de pneu
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Concerto de filtro de óleo
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Concerto de pistões
                  </a>
                </p>
              </div>

              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Contato</h6>

                <p>
                  <i className="fas fa-envelope me-3"></i>
                  sosmecacnica@example.com
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> 11 988491368
                </p>
                <p>
                  <i className="fas fa-print me-3"></i> 11 988491368
                </p>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default Principal;
