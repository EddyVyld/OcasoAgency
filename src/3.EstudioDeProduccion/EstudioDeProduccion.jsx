/** @jsxImportSource react */
import './EstudioDeProduccion.css';

// Importa tus imágenes (ajusta las rutas según tu estructura)
import trailerImg from '../assets/TrailersEmocionantes.jpg';
import posterImg from '../assets/PostersImpactantes.jpg';
import consultoriaImg from '../assets/Consultoria.jpg';
import marketingImg from '../assets/MarketingOnline.jpg';

const EstudioDeProduccion = () => {
  const servicios = [
    {
      id: 1,
      titulo: "Trailers emocionantes",
      descripcion: "Creación de trailers cinematográficos emocionantes que capturan la esencia y el atractivo de la película.",
      imagen: trailerImg,
      colorFondo: '#1a1a2e'
    },
    {
      id: 2,
      titulo: "Posters visualmente impactantes",
      descripcion: "Diseño y creación de posters cinematográficos visualmente atractivos y memorables.",
      imagen: posterImg,
      colorFondo: '#16213e'
    },
    {
      id: 3,
      titulo: "Consultoría en Estrategias de Marketing y Publicidad",
      descripcion: "",
      items: [
        "Identificación del público objetivo",
        "Análisis de la competencia",
        "Elaboración de planes de promoción personalizados"
      ],
      imagen: consultoriaImg,
      colorFondo: '#0f3460'
    },
    {
      id: 4,
      titulo: "Marketing Digital",
      descripcion: "",
      items: [
        "Estrategias para plataformas",
        "Gestión de optimización"
      ],
      imagen: marketingImg,
      colorFondo: '#533483'
    }
  ];

  return (
    <section className="estudio-produccion">
      <div className="encabezado">
        <h1>ESTUDIO DE PRODUCCIÓN</h1>
        <p className="eslogan">Tu pones la idea, nosotros la campaña</p>
      </div>

      <div className="servicios-container">
        {servicios.map((servicio) => (
          <div 
            key={servicio.id} 
            className="servicio-card"
            style={{ backgroundColor: servicio.colorFondo }}
          >
            <div className="servicio-imagen">
              <img src={servicio.imagen} alt={servicio.titulo} />
            </div>
            <div className="servicio-contenido">
              <h2>{servicio.titulo}</h2>
              {servicio.descripcion && <p>{servicio.descripcion}</p>}
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
    </section>
  );
};

export default EstudioDeProduccion;