import React, { useState } from "react";
import "./Popup.css";

export default function Popup({ isOpen, onClose }) {
  const [view, setView] = useState("bienvenida");

 
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [showLoginPassword, setShowLoginPassword] = useState(false);

  
  const [regName, setRegName] = useState("");
  const [regLastName, setRegLastName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [showRegPassword, setShowRegPassword] = useState(false);

  
  const validateLogin = () => {
    if (!loginEmail.endsWith("@gmail.com")) {
      alert("Solo se permiten correos @gmail.com");
      return false;
    }
    if (loginPassword.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres.");
      return false;
    }
    return true;
  };

  
  const validateRegistro = () => {
    if (!regEmail.endsWith("@gmail.com")) {
      alert("Solo se permiten correos @gmail.com");
      return false;
    }
    if (regPassword.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres.");
      return false;
    }
    if (!regName || !regLastName) {
      alert("Por favor completa tu nombre y apellidos.");
      return false;
    }
    return true;
  };

  
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!validateLogin()) return;
    alert("Inicio de sesión exitoso!");
    
    onClose();
    setView("bienvenida");
  };

  
  const handleRegistroSubmit = (e) => {
    e.preventDefault();
    if (!validateRegistro()) return;
    alert("Registro exitoso! Por favor, inicia sesión.");
    setView("login");
  };

  if (!isOpen) return null;

  return (
    <div
      className="popup-bienvenida"
      onClick={(e) => {
        if (e.target.classList.contains("popup-bienvenida")) {
          onClose();
          setView("bienvenida");
        }
      }}
    >
      {view === "bienvenida" && (
        <div className="popup-content bienvenida-content">
          <h6 className="text-muted mb-1">Bienvenido a</h6>
          <h2 className="fw-bold" style={{ color: "#d20072" }}>
            Aurea
          </h2>
          <button
            className="btn btn-custom my-3"
            onClick={() => setView("login")}
          >
            Inicia sesión
          </button>
          <button className="btn btn-custom" onClick={() => setView("registro")}>
            Crear cuenta
          </button>
        </div>
      )}

      {view === "login" && (
        <div className="popup-content form-login">
          <h6 className="text-muted mb-1 text-center">Bienvenido a</h6>
          <h2 className="fw-bold text-center" style={{ color: "#d20072" }}>
            Aurea
          </h2>

          <form className="mt-4" onSubmit={handleLoginSubmit}>
            <input
              type="email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              className="form-control mb-3 rounded-pill"
              placeholder="Correo electrónico"
              required
            />

            <div className="position-relative">
              <input
                type={showLoginPassword ? "text" : "password"}
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                className="form-control mb-2 rounded-pill"
                placeholder="Contraseña"
                minLength={6}
                required
              />
              <i
                className={
                  "bi position-absolute top-50 end-0 translate-middle-y me-3 " +
                  (showLoginPassword ? "bi-eye-fill" : "bi-eye-slash-fill")
                }
                style={{ cursor: "pointer", color: "#999" }}
                onClick={() => setShowLoginPassword((v) => !v)}
              ></i>
            </div>

            <div className="mb-3 text-muted text-center">
              <small>
                <a href="#">¿Olvidaste tu contraseña?</a>
              </small>
            </div>

            <button type="submit" className="btn btn-custom w-100 rounded-pill mb-2">
              Ingresar
            </button>
            <div className="text-center">
              <small>
                ¿Eres nuevo?{" "}
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setView("registro");
                  }}
                >
                  Crea tu cuenta aquí
                </a>
              </small>
            </div>
          </form>
        </div>
      )}

      {view === "registro" && (
        <div className="popup-content form-registro">
          <h6 className="text-muted mb-1 text-center">Bienvenido a</h6>
          <h2 className="fw-bold text-center" style={{ color: "#d20072" }}>
            Aurea
          </h2>
          <p className="text-center">Crea tu cuenta</p>

          <form className="mt-3" onSubmit={handleRegistroSubmit}>
            <input
              type="text"
              value={regName}
              onChange={(e) => setRegName(e.target.value)}
              className="form-control mb-3 rounded-pill"
              placeholder="Nombre"
              required
            />
            <input
              type="text"
              value={regLastName}
              onChange={(e) => setRegLastName(e.target.value)}
              className="form-control mb-3 rounded-pill"
              placeholder="Apellidos"
              required
            />

            <input
              type="email"
              value={regEmail}
              onChange={(e) => setRegEmail(e.target.value)}
              className="form-control mb-3 rounded-pill"
              placeholder="Correo electrónico"
              required
            />

            <div className="position-relative input-group mb-3">
              <input
                type={showRegPassword ? "text" : "password"}
                value={regPassword}
                onChange={(e) => setRegPassword(e.target.value)}
                className="form-control rounded-pill"
                placeholder="Contraseña"
                minLength={6}
                required
              />
              <i
                className={
                  "bi position-absolute top-50 end-0 translate-middle-y me-3 " +
                  (showRegPassword ? "bi-eye-fill" : "bi-eye-slash-fill")
                }
                style={{ cursor: "pointer", color: "#999" }}
                onClick={() => setShowRegPassword((v) => !v)}
              ></i>
            </div>

            <button type="submit" className="btn btn-custom w-100 rounded-pill mb-2">
              Continuar
            </button>

            <div className="text-center">
              <small>
                ¿Ya tienes una cuenta?{" "}
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setView("login");
                  }}
                >
                  Inicia sesión
                </a>
              </small>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

