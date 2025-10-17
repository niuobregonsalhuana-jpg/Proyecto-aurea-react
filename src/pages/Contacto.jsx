import { useState } from "react";
import "../pages/Contacto.css";
import {
  FaWhatsapp,
  FaEnvelope,
  FaClock,
  FaFacebook,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";

function Contacto() {
  const [mostrarModal, setMostrarModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMostrarModal(true);

    // Ocultar modal después de 3.5 segundos
    setTimeout(() => setMostrarModal(false), 3500);

    e.target.reset();
  };

  return (
    <section className="contacto-section">
      <div className="container">
        <h2 className="titulo-contacto">Contáctanos</h2>
        <p className="descripcion-contacto">
          ¿Tienes dudas sobre nuestros productos o tu pedido? ¡Nuestro equipo
          está listo para ayudarte!
        </p>

        <div className="contact-grid">
          {/* WhatsApp */}
          <div className="contact-card">
            <a
              href="https://wa.me/51987654321"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center hover:text-green-400 transition-colors"
            >
              <FaWhatsapp className="icono-contacto whatsapp cursor-pointer" />
              <h3>WhatsApp</h3>
              <p>+51 987 654 321</p>
            </a>
          </div>

          {/* Email / Gmail */}
          <div className="contact-card">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=aurera@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center hover:text-red-400 transition-colors"
            >
              <FaEnvelope className="icono-contacto correo cursor-pointer" />
              <h3>Email</h3>
              <p>aurera@gmail.com</p>
            </a>
          </div>

          {/* Horario */}
          <div className="contact-card">
            <FaClock className="icono-contacto horario" />
            <h3>Horario</h3>
            <p>Lun - Sáb: 9am a 6pm</p>
          </div>
        </div>

        <div className="redes-sociales">
          <h3>Síguenos en redes</h3>
          <div className="iconos-redes">
            <FaFacebook className="icono-red fa-beat" />
            <FaInstagram className="icono-red fa-beat" />
            <FaTiktok className="icono-red fa-beat" />
          </div>
        </div>

        <div className="formulario">
          <h3>Envíanos un mensaje</h3>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nombre:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Correo electrónico:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensaje:</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn-enviar">
              Enviar
            </button>
          </form>
        </div>
      </div>

      {/* Modal flotante */}
      {mostrarModal && (
        <div className="modal-fondo">
          <div className="modal-mensaje">
            <h3>✅ ¡Gracias por tu comentario!</h3>
            <p>Tu mensaje fue enviado con éxito 💌</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Contacto;
