/** @jsxImportSource react */
import "./cartelera.css";
import fondoCartelera from "./FilmsCartelera/Cartelera.jpg";

// Importa tus imágenes locales
import proyector from "./FilmsCartelera/ProyectorEterno.jpg";
import flor from "./FilmsCartelera/FlorCampo.jpg";
import lengua from "./FilmsCartelera/LenguaFuego.jpg";
import fotografia from "./FilmsCartelera/FotoPerdida.jpg";
import ultima from "./FilmsCartelera/UltimaFuncion.jpg";
import verde from "./FilmsCartelera/VerdePastel.jpg";
import lentes from "./FilmsCartelera/LentesCarmesi.jpg";
import ultimaLuz from "./FilmsCartelera/UltimaLuzRodaje.jpg";

export default function Cartelera() {
  return (
    <div id="seccion-cartelera" className="cartelera-container">
      {/* Título con imagen de fondo */}
      <div className="titulo-contenedor">
        <img
          src={fondoCartelera}
          alt="Fondo Cartelera"
          className="imagen-fondo"
        />
        <div className="titulo-centrado">
          <h1>CARTELERA</h1>
        </div>
      </div>

      {/* Grid de películas */}
      <div className="peliculas-contenedor">
        {/* Proyector eterno - Full width */}
        <div className="pelicula-item full-width">
          <img src={proyector} alt="Proyector eterno" />
          <div className="pelicula-header">
            <h2>PROYECTOR ETERNO</h2>
          </div>
          <div className="pelicula-sinopsis">
            <p>
              En un futuro cercano donde el cine ha sido prohibido, un grupo de
              adolescentes encuentra una vieja sala de proyección. Con cada
              película que ven, descubren secretos del pasado que podrían
              cambiar el destino del país.
            </p>
          </div>
        </div>

        {/* Espacio entre imágenes */}
        <div className="espacio-vertical"></div>

        {/* Flor de Campo - Full width */}
        <div className="pelicula-item full-width">
          <img src={flor} alt="Flor de Campo" />
          <div className="pelicula-header">
            <h2>FLOR DE CAMPO</h2>
          </div>
          <div className="pelicula-sinopsis">
            <p>
              Una mujer regresa a su pueblo natal tras la muerte de su madre. En
              su jardín, las flores que crecen esconden fragmentos de una
              historia familiar que fue enterrada por generaciones.
            </p>
          </div>
        </div>

        {/* Espacio entre imágenes */}
        <div className="espacio-vertical"></div>

        {/* Lengua de Fuego y Foto Perdida */}
        <div className="peliculas-par">
          <div className="pelicula-item media-width">
            <img src={lengua} alt="Lengua de Fuego" />
            <div className="pelicula-header">
              <h2>LENGUA DE FUEGO</h2>
            </div>
            <div className="pelicula-sinopsis">
              <p>
                Una historia sobre deseo, lenguaje y censura.Tras una ruptura,
                una escritora comienza a escribir un libro que narra su historia
                de amor... pero lo que escribe empieza a suceder en la vida
                real, obligándola a enfrentar el final que no quiere admitir.
              </p>
            </div>
          </div>

          {/* Espacio horizontal entre películas del par */}
          <div className="espacio-horizontal"></div>

          <div className="pelicula-item media-width">
            <img src={fotografia} alt="La fotografía perdida" />
            <div className="pelicula-header">
              <h2>LA FOTOGRAFÍA PERDIDA</h2>
            </div>
            <div className="pelicula-sinopsis">
              <p>
                Thriller psicológico sobre un fotógrafo que pierde la memoria.
                Realizamos un teaser que se revela a medida que el espectador
                interactúa, y un sitio web con efectos de glitch.Una campaña que
                desdibuja los límites entre recuerdo y ficción.
              </p>
            </div>
          </div>
        </div>

        {/* Espacio entre secciones */}
        <div className="espacio-vertical"></div>

        {/* Última Función - Full width */}
        <div className="pelicula-item">
          <img src={ultima} alt="Última Función" />
          <div className="pelicula-header">
            <h2>ÚLTIMA FUNCIÓN</h2>
          </div>
          <div className="pelicula-sinopsis">
            <p>
              Un grupo de amigos se queda atrapado en un cine después de una
              función de medianoche. Pronto descubren que cada sala muestra
              escenas de su pasado que no recuerdan haber vivido.
            </p>
          </div>
        </div>

        {/* Verde Pastel y Lentes Carmesí */}
        <div className="peliculas-par">
          <div className="pelicula-item media-width">
            <img src={verde} alt="Verde Pastel" />
            <div className="pelicula-header">
              <h2>VERDE PASTEL</h2>
            </div>
            <div className="pelicula-sinopsis">
              <p>
                En una ciudad donde el color es controlado por el gobierno, una
                joven empieza a ver el mundo en tonos diferentes. Su cabello es
                solo el primer síntoma de una revolución sensorial.
              </p>
            </div>
          </div>

          <div className="pelicula-item media-width">
            <img src={lentes} alt="Lentes Carmesí" />
            <div className="pelicula-header">
              <h2>LENTES CARMESÍ</h2>
            </div>
            <div className="pelicula-sinopsis">
              <p>
                Cada vez que se pone los lentes que su abuela le dejó, Luisa
                puede ver las decisiones que no tomó. Pero el poder de mirar el
                “hubiera” comienza a consumir su presente.
              </p>
            </div>
          </div>
        </div>

        {/* Última luz de rodaje - Full width */}
        <div className="pelicula-item">
          <img src={ultimaLuz} alt="La última luz de rodaje" />
          <div className="pelicula-header">
            <h2>LA ÚLTIMA LUZ DE RODAJE</h2>
          </div>
          <div className="pelicula-sinopsis">
            <p>
              Un joven cineasta se obsesiona con terminar la última película
              inconclusa de su maestro. Al proyectarla por primera vez, las
              escenas comienzan a reflejar momentos que aún no han ocurrido.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
