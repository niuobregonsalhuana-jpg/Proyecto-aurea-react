import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-pink navbar-dark sticky-top shadow-lg">
      <div className="container">
        <a className="navbar-brand fw-bold text-white" href="#">Aurea</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item mx-3">
              <a className="nav-link fw-bold text-white" href="/">Inicio</a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link fw-bold text-white" href="/SobreAurea">Sobre Aurea</a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link fw-bold text-white" href="/productos">Productos</a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link fw-bold text-white" href="/contacto">Contacto</a>
            </li>
          </ul>
          <div className="d-flex ms-4 gap-4">
            <a href="#" className="text-white" id="btnAbrirBienvenida">
              <i className="bi bi-person"></i>
            </a>
            <a href="#" className="text-white">
              <i className="bi bi-cart"></i>
            </a>
            <a href="#" className="text-white" id="iconPromo">
              <i className="bi bi-gift"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
