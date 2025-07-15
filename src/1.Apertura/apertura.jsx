import "./apertura.css";
import React, { useState, useEffect, useRef } from "react";

function Apertura() {
  const [menuActive, setMenuActive] = useState(false);
  const navRef = useRef(null);
  const menuToggleRef = useRef(null);

  const toggleMenu = () => {
    setMenuActive((prev) => !prev);
    document.body.style.overflow = !menuActive ? "hidden" : "";
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        window.innerWidth <= 768 &&
        menuActive &&
        navRef.current &&
        !navRef.current.contains(event.target) &&
        !menuToggleRef.current.contains(event.target)
      ) {
        setMenuActive(false);
        document.body.style.overflow = "";
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 768 && menuActive) {
        setMenuActive(false);
        document.body.style.overflow = "";
      }
    };

    document.addEventListener("click", handleClickOutside);
    window.addEventListener("resize", handleResize);
    return () => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, [menuActive]);

  const handleLinkClick = () => {
    if (window.innerWidth <= 768 && menuActive) {
      toggleMenu();
    }
  };

  return (
    <header className="apertura">
      <div className="overlay"></div>
      <nav>
        <div
          className="menu-toggle"
          onClick={(e) => {
            e.stopPropagation();
            toggleMenu();
          }}
          ref={menuToggleRef}
        >
          <i className={`bi ${menuActive ? "bi-x" : "bi-list"}`}></i>
        </div>
        <ul className={`nav ${menuActive ? "active" : ""}`} ref={navRef}>
          <li>
            <a href="#" onClick={handleLinkClick}>
              Apertura
            </a>
          </li>
          <li>
            <a href="#" onClick={handleLinkClick}>
              Tras Bambalinas
            </a>
          </li>
          <li>
            <a href="#" onClick={handleLinkClick}>
              Estudio de Producción
            </a>
          </li>
          <li>
            <a href="#" onClick={handleLinkClick}>
              Cartelera
            </a>
          </li>
          <li>
            <a href="#" onClick={handleLinkClick}>
              Contáctanos
            </a>
          </li>
        </ul>
      </nav>

      <div className="apertura-text">
        <h1>La esencia del cine, llevada al mundo con creatividad</h1>
        <p>
          Recuperamos la emoción, el arte y la identidad del cine nacional con
          campañas que inspiran, conmueven y trascienden.
        </p>
      </div>

      <div className="icono-apertura">
        <i className="bi bi-chevron-down"></i>
      </div>
    </header>
  );
}

export default Apertura;
