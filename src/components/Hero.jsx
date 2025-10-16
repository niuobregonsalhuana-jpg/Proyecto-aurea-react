import React from "react";
import "./Hero.css"

function Hero() {
  return (
    <>
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start">
              <h1 className="fw-bold text-pink display-5">DESCUBRE TU BELLEZA</h1>
              <p className="text-muted">
                En Aurea creemos que la belleza no es solo maquillaje, es la forma
                en la que expresas quién eres. Cada producto está diseñado para
                resaltar tu esencia, brindarte confianza y acompañarte en cada
                estilo de vida.
              </p>
              <a href="#" className="btn btn-custom mt-3">Inicia Aquí</a>
            </div>
            <div className="col-md-6 text-center">
              <img
                src="/public/image.png"
                alt="Aurera Hero"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-5" style={{ backgroundColor: "var(--color-secondary)" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center">
              <img
                src="/public/imagen2.png"
                alt="Sobre Aurea"
                className="img-fluid"
              />
            </div>
            <div className="col-md-6">
              <h2 className="fw-bold">Sobre Aurea</h2>
              <p>
                <strong>Aurera</strong> es una marca comprometida con redefinir la
                belleza como una herramienta de empoderamiento, confianza y
                expresión personal.
              </p>
              <p>
                Nuestra misión es inspirar a las mujeres a sentirse seguras,
                auténticas y libres de ser quienes realmente son, a través del
                maquillaje y el autocuidado.
              </p>

              <p>
                Desde nuestro inicio en 2020, hemos acompañado a miles de mujeres
                en su camino hacia una versión más fuerte y segura de sí mismas,
                ofreciendo productos de calidad, atención cercana y una comunidad
                que celebra la diversidad y el amor propio.
              </p>
              <div className="row text-center mt-4">
                <div className="col">
                  <h4 className="text-pink fw-bold">50K+</h4>
                  <p>Mujeres empoderadas</p>
                </div>
                <div className="col">
                  <h4 className="text-pink fw-bold">1.5K+</h4>
                  <p>Productos vendidos</p>
                </div>
                <div className="col">
                  <h4 className="text-pink fw-bold">15+</h4>
                  <p>Ciudades impactadas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">¿Por qué nos eligen?</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <i className="bi bi-eye display-4 text-pink"></i>
              <h5 className="fw-bold mt-3">Nuestra Visión</h5>
              <p>Impulsamos la autenticidad y la confianza.</p>
            </div>
            <div className="col-md-4">
              <i className="bi bi-truck display-4 text-pink"></i>
              <h5 className="fw-bold mt-3">Envíos confiables</h5>
              <p>Entregas rápidas en todo el país.</p>
            </div>
            <div className="col-md-4">
              <i className="bi bi-heart display-4 text-pink"></i>
              <h5 className="fw-bold mt-3">Pasión por ti</h5>
              <p>Productos pensados para tu bienestar.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="separador-rosado text-white text-center py-5">
        <div className="container">
          <p className="mensaje mb-0">
            El <strong><em>maquillaje</em></strong> es tu armadura,<br />
            tu fuerza y tu <strong><em>voz al mundo</em></strong>
          </p>
        </div>
      </section>
    </>
  );
}

export default Hero;
