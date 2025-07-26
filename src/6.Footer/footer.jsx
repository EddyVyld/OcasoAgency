import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-top">
        <nav className="footer-nav">
          <a href="#seccion-apertura">Apertura</a>
          <a href="#seccion-bambalinas">Tras Bambalinas</a>
          <a href="#seccion-estudioProduccion">Estudio de Producción</a>
          <a href="#seccion-cartelera">Cartelera</a>
          <a href="#seccion-contactanos">Contáctanos</a>
        </nav>
        <div className="footer-social">
          <a href="#">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="#">
            <i className="bi bi-twitter-x"></i>
          </a>
          <a href="#">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="#">
            <i className="bi bi-youtube"></i>
          </a>
        </div>
      </div>

      <hr className="footer-divider" />

      <div className="footer-bottom">
        <span>©2024 All rights reserved.</span>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookies Settings</a>
        </div>
      </div>
    </footer>
  );
}
