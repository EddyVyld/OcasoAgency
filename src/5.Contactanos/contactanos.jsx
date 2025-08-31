import "./contactanos.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

import fondoContactanos from "../assets/Contactanos.jpg";

export default function Contactanos() {
  return (
    <section
      id="seccion-contactanos"
      className="contact-container"
      style={{ backgroundImage: `url(${fondoContactanos})` }}
    >
      <div className="contact-overlay">
        <div className="contact-content">
          {/* Izquierda */}
          <div className="contact-left">
            <h2>Contáctanos</h2>
            <h3>¿Tu historia merece la gran pantalla?</h3>
            <p>
              Si tienes una película, un proyecto o una idea que necesita
              brillar, estás en el lugar correcto.
              <br />
              Nuestro equipo creativo está listo para construir contigo una
              campaña digna de cartelera.
            </p>
            <p>🎥 Luces, cámara... escríbenos.</p>

            <p className="contact-below">
              <FaEnvelope style={{ marginRight: "15px" }} />
              ocaso@gmail.com
            </p>
            <p className="contact-below">
              <FaPhone style={{ marginRight: "15px" }} />
              +52 (55) 1234-5678
            </p>
            <p className="contact-below">
              <FaMapMarkerAlt style={{ marginRight: "15px" }} />
              Av. Imaginaria 123, Ciudad Cine, México
            </p>
          </div>

          {/* Derecha */}
          <form className="contact-form">
            Nombre <input type="text" required />
            Email <input type="email" required />
            Mensaje{" "}
            <textarea placeholder="Escribe tu mensaje..." rows="4" required />
            <label className="checkbox">
              <input type="checkbox" required />
              Acepto<a href="#">Términos y Condiciones</a>
            </label>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </section>
  );
}
