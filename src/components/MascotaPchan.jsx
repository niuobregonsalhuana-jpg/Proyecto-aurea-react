import React, { useState } from "react";

function MascotaPchan() {
  const [mostrarAyuda, setMostrarAyuda] = useState(false);

  const toggleAyuda = () => {
    setMostrarAyuda(!mostrarAyuda);
  };

  const enviarMensaje = () => {
    alert("¡Mensaje enviado! Gracias por tu sugerencia.");

  };

  return (
    <>
      <div className="mascota" onClick={toggleAyuda} style={{ cursor: "pointer" }}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/4588/4588811.png"
          alt="Koala de ayuda"
        />
      </div>

      {mostrarAyuda && (
        <div className="cuadro-ayuda" id="cuadroAyuda">
          <h3>¡Hola! Soy Pchan.</h3>
          <p>¿Tienes alguna sugerencia o comentario?</p>
          <textarea placeholder="Escríbelo aquí..."></textarea>
          <button onClick={enviarMensaje}>Enviar</button>
        </div>
      )}
    </>
  );
}

export default MascotaPchan;
