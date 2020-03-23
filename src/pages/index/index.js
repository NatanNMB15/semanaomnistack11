import React from "react";
import { Link } from "react-router-dom";

import imgLogo from "../../assets/images/logo.svg";
import imgHeroes from "../../assets/images/heroes.png";

export default function index() {
  return (
    <div className="container-fluid">
      <div className="row mt-3">
        <div className="col-lg ml-lg-5">
          <div className="row">
            <div className="col-lg">
              {" "}
              <img
                src={imgLogo}
                alt="Logo"
                className="img-fluid"
                id="logo"
              />{" "}
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg">
              <h1 className="h1 font-weight-bold">Bem-vindo ao Be The Hero</h1>
            </div>
          </div>
          <div className="row d-flex justify-content-start ml-3 mt-3">
            <Link to="/incidentsAll" className="btn btn-lg w-75 btn-default">
              VER CASOS
            </Link>
          </div>
          <div className="row d-flex justify-content-start ml-3 mt-3">
            <Link to="/login" className="btn btn-lg w-75 btn-default">
              LOGIN
            </Link>
          </div>
          <div className="row d-flex justify-content-start ml-3 mt-3">
            <Link to="/register" className="btn btn-lg w-75 btn-default">
              CADASTRO
            </Link>
          </div>
          <div className="row d-flex justify-content-start ml-3 mt-3">
            <Link to="/about" className="btn btn-lg w-75 btn-default">
              SOBRE
            </Link>
          </div>
          <div className="row d-flex justify-content-start ml-1 mt-3">
            <div className="col-md ml-0">
              {" "}
              <Link to="/useterms" className="text-reset">
                <span>Termos de Uso</span>
              </Link>{" "}
            </div>
            <div className="col-md ml-0">
              {" "}
              <a
                className="text-reset"
                href="https://www.iubenda.com/privacy-policy/55306019/legal"
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                <span>Política de Privacidade</span>
              </a>{" "}
            </div>
          </div>
        </div>
        <div className="col-lg mt-4">
          <img src={imgHeroes} className="img-fluid" id="Heroes" alt="Heroes" />
        </div>
      </div>
    </div>
  );
}
