import Apertura from "./1.Apertura/apertura";
import TrasBambalinas from "./2.TrasBambalinas/trasBambalinas";
import EstudioDeProduccion from "./3.EstudioDeProduccion/EstudioDeProduccion";
import Cartelera from "./4.Cartelera/Cartelera";
import Clientes from "./4.Cartelera/Clientes/clientes";
import Contactanos from "./5.Contactanos/contactanos";
import Footer from "./6.Footer/footer";

function App() {
  return (
    <>
      <Apertura />
      <TrasBambalinas />
      <EstudioDeProduccion />
      <Cartelera />
      <Clientes />
      <Contactanos />
      <Footer />
    </>
  );
}

export default App;
