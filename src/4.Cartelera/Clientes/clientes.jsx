/** @jsxImportSource react */
import { useState, useEffect } from 'react';
import './clientes.css';

// Importar logos (asegúrate de tener imágenes en alta resolución)
import cinepolisLogo from './Marcas/LogoCinepolis.png';
import cinemexLogo from './Marcas/Cinemex-Logo-2024.png';
import corazonFilmsLogo from './/Marcas/corazon-films2.png';
import WooFilmsLogo from './Marcas/WooFilmsLogo.png';
import MandarinaCine from './Marcas/logo-mandarina.png';

export default function Clientes() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  const clientes = [
    { id: 1, logo: cinepolisLogo },
    { id: 2, logo: cinemexLogo },
    { id: 3, logo: corazonFilmsLogo },
    { id: 4, logo: WooFilmsLogo },
    { id: 5, logo: MandarinaCine }
  ];

  // Carrusel automático
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % clientes.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, clientes.length]);

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(prev => (prev - 1 + clientes.length) % clientes.length);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(prev => (prev + 1) % clientes.length);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="clientes-section">
      <div className="clientes-header">
        <h2>CON QUIENES TRABAJAMOS</h2>
        <p className="eslogan">Tu pones la idea, nosotros la campaña</p>
      </div>

      <div className="carrusel-container">
        <button 
          className="carrusel-btn prev" 
          onClick={goToPrev}
          aria-label="Anterior"
        >
          &lt;
        </button>
        
        <div className="slide-container">
          {clientes.map((cliente, index) => (
            <div 
              key={cliente.id}
              className={`slide ${index === currentIndex ? 'active' : ''}`}
            >
              <div className="image-wrapper">
                <img 
                  src={cliente.logo} 
                  alt={`Cliente ${index + 1}`} 
                  className="cliente-logo"
                />
              </div>
            </div>
          ))}
        </div>
        
        <button 
          className="carrusel-btn next" 
          onClick={goToNext}
          aria-label="Siguiente"
        >
          &gt;
        </button>
      </div>

      <div className="indicadores">
        {clientes.map((_, index) => (
          <button
            key={index}
            className={`indicador ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Ir al slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}