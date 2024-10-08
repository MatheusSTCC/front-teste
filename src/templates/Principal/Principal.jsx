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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque voluptatum numquam doloribus pariatur ad? Repellat
              voluptates sint commodi beatae, r epellendus vel ipsa optio
              quisquam cupiditate deleniti, laboriosam maxime, aliquid ex?
            </p>
          </div>

          <div className="mecanicos2">
            <img id="imgmec" src={mec02} alt="" />
            <img id="estrelas" src={cincoestrela} alt="" />

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque voluptatum numquam doloribus pariatur ad? Repellat
              voluptates sint commodi beatae, r epellendus vel ipsa optio
              quisquam cupiditate deleniti, laboriosam maxime, aliquid ex?
            </p>
          </div>

          <div className="mecanicos3">
            <img id="imgmec" src={mec03} alt="" />
            <img id="estrelas" src={cincoestrela} alt="" />

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque voluptatum numquam doloribus pariatur ad? Repellat
              voluptates sint commodi beatae, r epellendus vel ipsa optio
              quisquam cupiditate deleniti, laboriosam maxime, aliquid ex?
            </p>
          </div>
        </div>
      </div>

      <div className="quem">
        <img src={quems} alt="quem" />

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
          voluptatibus vel iusto nobis optio ut labore deserunt qui, ab magni
          fugiat? Iste dicta hic illum ratione atque cumque error quasi!Lorem,
          ipsum dolor sit amet consectetur adipisicing elit. Expedita
          voluptatibus vel iusto nobis optio ut labore deserunt qui, ab magni
          fugiat? Iste dicta hic illum ratione atque cumque error quasi!Lorem,
          ipsum dolor sit amet consectetur adipisicing elit. Expedita
          voluptatibus vel iusto nobis optio ut labore deserunt qui, ab magni
          fugiat? Iste dicta hic illum ratione atque cumque error quasi!Lorem,
          ipsum dolor sit amet consectetur adipisicing elit. Expedita
          voluptatibus vel iusto nobis optio ut labore deserunt qui, ab magni
          fugiat? Iste dicta hic illum ratione atque cumque error quasi!
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
                <h6 className="text-uppercase fw-bold mb-4 text-light">
                  <i className="fas fa-gem me-3 text-light"></i>S.O.S mecânica
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
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
