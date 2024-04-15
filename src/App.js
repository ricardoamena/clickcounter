// Importa el archivo CSS para estilos específicos de la aplicación
import './App.css';

// Importa la imagen 'iniciales3.jpg' desde la carpeta 'imagenes'
import inicialeslogo from './imagenes/iniciales3.jpg';

// Importa los componentes 'Boton' y 'Contador' desde sus respectivos archivos
import Boton from './componentes/boton';
import Contador from './componentes/contador';

// Importa el hook 'useState' de React para manejar el estado
import { useState } from 'react';

// Define el componente funcional 'App'
function App() {
  // Declara el estado 'numClick' y la función 'setNumClick' para actualizarlo
  const [numClick, setNumClick] = useState(0);

  // Función que se ejecuta cuando se hace clic en el botón
  const manejarClick = () => {
    setNumClick(numClick + 1);
  }

  // Función que se ejecuta cuando se hace clic en el botón de reinicio
  const reiniciarCont = () => {
    setNumClick(0);
  }

  // Renderiza el contenido del componente 'App'
  return (
    <div className="App">
      {/* Contenedor para el logo */}
      <div className='logo-contenedor'>
        <img className='logo' src={inicialeslogo} alt='Logo'/>
      </div>

      {/* Contenedor principal */}
      <div className='contenedor-principal'>
        {/* Renderiza el componente 'Contador' con el valor actual de 'numClick' */}
        <Contador numClick={numClick} />

        {/* Renderiza el botón de 'Click' */}
        <Boton
          texto='Click'
          esBotonDeClick={true}
          manejarClick={manejarClick}
        />

        {/* Renderiza el botón de 'Reiniciar' */}
        <Boton
          texto='Reiniciar'
          esBotonDeClick={false}
          manejarClick={reiniciarCont}
        />
      </div>
    </div>
  );
}

// Exporta el componente 'App' para su uso en otros archivos
export default App;