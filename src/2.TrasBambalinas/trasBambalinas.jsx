import React, { useState } from "react";
import "./trasBambalinas.css";
import { MdLocalMovies } from "react-icons/md"; // Misión
import { FaVideo } from "react-icons/fa"; // Visión
import { GiClapperboard } from "react-icons/gi"; // Valores
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Flechas laterales

const TrasBambalinas = () => {
  const [active, setActive] = useState("vision");

  const contenido = {
    mision: {
      icon: <MdLocalMovies size={30} />,
      titulo: "Misión",
      texto:
        "Revivir la esencia del cine de oro a través de campañas creativas, visuales y emocionales que inspiren, conecten con el público y le devuelvan al cine nacional el lugar que merece.",
    },
    vision: {
      icon: <FaVideo size={30} />,
      titulo: "Visión",
      texto:
        "Convertirnos en el referente de comunicación cinematográfica en México, fusionando arte, estrategia y nostalgia para revivir el espíritu del cine de oro con una mirada moderna.",
    },
    valores: {
      icon: <GiClapperboard size={30} />,
      titulo: "Valores",
      texto:
        "Pasión por el cine, creatividad sin límites y compromiso con la excelencia visual. Trabajamos desde el corazón, con respeto por la historia y visión hacia el futuro.",
    },
  };

  const claves = Object.keys(contenido);
  const currentIndex = claves.indexOf(active);

  const cambiarPunto = (direccion) => {
    const nuevoIndex = currentIndex + direccion;
    if (nuevoIndex >= 0 && nuevoIndex < claves.length) {
      setActive(claves[nuevoIndex]);
    }
  };

  return (
    <section id="seccion-bambalinas" className="tras-bambalinas">
      <div className="bg-text">TRAS BAMBALI NAS</div>

      <div className="content">
        <h5 className="ocaso">OCASO</h5>
        <h2 className="quienesSomos">¿QUIÉNES SOMOS?</h2>
        <p className="intro">
          Somos una agencia creativa especializada en publicidad cinematográfica
          mexicana. Fusionamos emoción, diseño y estrategia para que cada
          película encuentre su público, inspirando una nueva era del cine
          nacional con alma, historia y visión de futuro.
        </p>

        <div className="tarjetas">
          {claves.map((clave) => {
            const info = contenido[clave];
            return (
              <div
                key={clave}
                className={`tarjeta ${active === clave ? "activa" : ""}`}
                onClick={() => setActive(clave)}
              >
                {info.icon}
                <h3>{info.titulo}</h3>
                <p>{info.texto}</p>
              </div>
            );
          })}
        </div>

        <div className="timeline-navegacion">
          <button
            className="flecha"
            onClick={() => cambiarPunto(-1)}
            disabled={currentIndex === 0}
          >
            <FaChevronLeft />
          </button>

          <div className="timeline">
            {claves.map((clave, i) => (
              <button
                key={clave}
                className={`punto ${active === clave ? "activo" : ""}`}
                onClick={() => setActive(clave)}
              >
                ●<span>{contenido[clave].titulo}</span>
              </button>
            ))}
          </div>

          <button
            className="flecha"
            onClick={() => cambiarPunto(1)}
            disabled={currentIndex === claves.length - 1}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrasBambalinas;
