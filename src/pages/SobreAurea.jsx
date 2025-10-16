import React from "react";

export default function SobreAurea() {
  return (
    <>
      <section className="hero-sobre-aurea py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="fw-bold text-pink">Hola, somos Aurea.</h1>
              <p className="lead mt-3 text-muted">
                Unimos a mujeres reales para empoderarlas a través del amor propio, la autenticidad y la belleza sin filtros.
              </p>
              <a href="#sobre-nosotras" className="btn btn-custom mt-4 rounded-pill px-4">
                Conoce más sobre nosotras <i className="bi bi-arrow-down ms-2"></i>
              </a>
            </div>
            <div className="col-md-6 text-center">
              <img src="/public/imagen2.png" alt="Mujer ilustración" className="img-fluid rounded" />
            </div>
          </div>
        </div>
      </section>

      <section className="mision-sobre-aurea py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-4 mb-md-0">
              <p className="text-uppercase fw-semibold text-pink mb-2">Nuestra misión</p>
              <h2 className="fw-bold text-dark">
                Inspirar a las mujeres a sentirse seguras, auténticas y libres a través del maquillaje y el autocuidado.
              </h2>
            </div>
            <div className="col-md-6">
              <p className="fw-semibold text-dark mb-2">Nuestra historia</p>
              <p className="text-dark">
                En Aurea, creemos que la belleza va mucho más allá del maquillaje. Nuestra historia nace del deseo de empoderar a cada mujer para que se sienta segura, auténtica y libre de expresar su verdadera esencia. Desde nuestros inicios, nos hemos comprometido a crear productos que no solo realzan la apariencia, sino que también inspiran confianza y amor propio. Cada fórmula, cada color y cada detalle está pensado para acompañar a mujeres en su camino hacia la autoaceptación y el empoderamiento personal. Porque para nosotras, la verdadera belleza está en sentirse bien con una misma y en la valentía de mostrarse sin filtros. Juntas, queremos transformar la industria de la belleza en un espacio inclusivo, positivo y lleno de fuerza femenina.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="sobre-nosotras" className="separador-rosado text-white text-center py-5">
        <div className="container">
          <p className="mensaje mb-0">
            Conoce <strong><em>más</em></strong> sobre<br /><strong><em>nosotras</em></strong>
          </p>
        </div>
      </section>

      <section className="team py-5">
        <div className="container">
          <div className="row align-items-center mb-4">
            <div className="col-md-6">
              <p className="text-uppercase fw-semibold text-pink">Quiénes somos</p>
              <h2 className="fw-bold text-dark">Conoce a nuestro equipo fundador.</h2>
            </div>
            <div className="col-md-6">
              <p className="text-dark">
                Somos un equipo apasionado y diverso, dedicado a impulsar confianza, amor propio y autenticidad en cada producto que creamos. Nuestro compromiso es acompañarte en tu camino para que te sientas único, sin filtros y con la mejor actitud. Juntos, trabajamos para innovar y conectar con nuestra comunidad con transparencia y energía positiva.
              </p>
            </div>
          </div>

          <div className="row text-center g-4">
            <div className="col-md-4 d-flex flex-column align-items-center">
              <img
                src="https://api.dicebear.com/6.x/micah/svg?seed=Chris&backgroundColor=ff0080"
                alt="Niurka Obregon"
                className="img-avatar mb-3"
                width="150"
                height="150"
              />
              <h5 className="fw-bold">Niurka Obregon</h5>
              <p className="text-muted">CEO & Directora creativa</p>
            </div>

            <div className="col-md-4 d-flex flex-column align-items-center">
              <img
                src="https://api.dicebear.com/6.x/micah/svg?seed=Xiomara&backgroundColor=ff0080"
                alt="Xiomara"
                className="img-avatar mb-3"
                width="150"
                height="150"
              />
              <h5 className="fw-bold">Xiomara</h5>
              <p className="text-muted">CEO & Jefa de comunidad</p>
            </div>

            <div className="col-md-4 d-flex flex-column align-items-center">
              <img
                src="https://api.dicebear.com/6.x/micah/svg?seed=Ryan&backgroundColor=ff0080"
                alt="Melisa"
                className="img-avatar mb-3"
                width="150"
                height="150"
              />
              <h5 className="fw-bold">Melisa</h5>
              <p className="text-muted">CEO & Líder de innovación</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
