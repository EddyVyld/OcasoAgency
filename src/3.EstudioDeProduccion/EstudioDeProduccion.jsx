/** @jsxImportSource react */
import "./EstudioDeProduccion.css";
import { useState } from "react";

// Importa tus imágenes
import fondoProduccion from "../assets/fondoProduccion.jpg";
import trailerImg from "../assets/TrailersEmocionantes.jpg";
import posterImg from "../assets/PostersImpactantes.jpg";
import consultoriaImg from "../assets/Consultoria.jpg";
import marketingImg from "../assets/MarketingOnline.jpg";
import fondoQueOfrecemos from "../assets/fondoQueOfrecemos.jpg";
import relacionesPublicasImg from "../assets/relaciones-publicas.jpg";

// Iconos de flechas
const LeftArrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="white"
    width="20px"
    height="20px"
  >
    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
  </svg>
);

const RightArrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="white"
    width="20px"
    height="20px"
  >
    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
  </svg>
);

const EstudioDeProduccion = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const servicios = [
    {
      id: 1,
      titulo: "Trailers emocionantes",
      descripcion:
        "Creación de trailers cinematográficos emocionantes que capturan la esencia y el atractivo de la película.",
      imagen: trailerImg,
    },
    {
      id: 2,
      titulo: "Posters visualmente impactantes",
      descripcion:
        "Diseño y creación de posters cinematográficos visualmente atractivos y memorables.",
      imagen: posterImg,
    },
    {
      id: 3,
      titulo: "Consultoría en Estrategias de Marketing y Publicidad",
      items: [
        "Identificación del público objetivo",
        "Análisis de la competencia",
        "Elaboración de planes de promoción personalizados",
      ],
      imagen: consultoriaImg,
    },
    {
      id: 4,
      titulo: "Marketing Digital",
      items: ["Estrategias para plataformas", "Gestión de optimización"],
      imagen: marketingImg,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      const next = prev + 1;
      // Si llegamos al final, volver al inicio (carrusel infinito)
      return next >= servicios.length ? 0 : next;
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      const previo = prev - 1;
      // Si estamos al inicio, ir al final (carrusel infinito)
      return previo < 0 ? servicios.length - 1 : previo;
    });
  };

  return (
    <section id="seccion-estudioProduccion" className="estudio-produccion">
      {/* Sección 1: Encabezado y Servicios con imagen de fondo */}
      <div
        className="seccion-principal"
        style={{ backgroundImage: `url(${fondoProduccion})` }}
      >
        <div className="overlay">
          <div className="contenido-principal">
            <div className="titulo-eslogan">
              <h1>ESTUDIO DE PRODUCCIÓN</h1>
              <p className="eslogan">Tu pones la idea, nosotros la campaña</p>
            </div>

            <div className="servicios-carrusel">
              <div className="carrusel-container">
                <button className="nav-arrow left-arrow" onClick={prevSlide}>
                  <LeftArrow />
                </button>

                <div className="carrusel">
                  <div
                    className="carrusel-inner"
                    style={{ transform: `translateX(-${currentSlide * 320}px)` }}
                  >
                    {servicios.map((servicio) => (
                      <div key={servicio.id} className="servicio-card">
                        <div className="servicio-imagen">
                          <img src={servicio.imagen} alt={servicio.titulo} />
                        </div>
                        <div className="servicio-contenido">
                          <h3>{servicio.titulo}</h3>
                          {servicio.descripcion && (
                            <p>{servicio.descripcion}</p>
                          )}
                          {servicio.items && (
                            <ul>
                              {servicio.items.map((item, index) => (
                                <li key={index}>{item}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <button className="nav-arrow right-arrow" onClick={nextSlide}>
                  <RightArrow />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección 2: ¿Qué Ofrecemos? con fondo en blanco y negro */}
      <div
        className="seccion-secundaria"
        style={{ backgroundImage: `url(${fondoQueOfrecemos})` }}
      >
        <div className="overlay-bn">
          <div className="contenido-secundario">
            <h2>¿QUÉ OFRECEMOS?</h2>
            <p className="intro-secundario">Volviendo la publicidad en cine</p>

            <div className="servicio-destacado-con-imagen">
              <div className="imagen-servicio">
                <img src={relacionesPublicasImg} alt="Relaciones públicas" />
              </div>
              <div className="contenido-servicio">
                <h3>Relaciones públicas</h3>
                <p>
                  Gestión de relacionamiento estratégico, distribución de
                  comunicados de prensa y coordinación de eventos.
                </p>
                <button className="boton-minimalista">
                  Pide una contratación
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EstudioDeProduccion;
