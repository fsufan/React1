import './App.css';
import Header from './components/Header';
import Card from './components/Card';

import Footer from './components/footer';

function App() {
  return (
    <>
      <Header titulo ="Galería de Imágenes con React" />
      <Card direccion = "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/492000/492960-universal-studios-orlando.jpg" titulo="Universal Orlando Resort" descripcion="Universal Orlando Resort es un complejo Turistico, especializado en parques tematicos"/>
      <Card direccion = "https://www.wfla.com/wp-content/uploads/sites/71/2021/06/AP21173416004367.jpg" titulo="Disney Worlds" descripcion="Disney Worlds es donde la magia de puede revivir a cualquier edad"/>
      <Card direccion = "https://i.ytimg.com/vi/t1HzXNWgwJg/maxresdefault.jpg" titulo="SeaWorlds" descripcion="En Seaworld Orlando podras conocer las maravillas del fondo del mar"/>
      <Footer />
    </>
  );
}



export default App;
