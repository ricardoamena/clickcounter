// Importa la librería React
import React from "react";

// Importa el archivo CSS para estilos específicos del botón
import '../hojasdeestilos/boton.css';

// Define el componente funcional 'Boton'
function Boton({texto, esBotonDeClick, manejarClick}) {
  // Renderiza un botón con las siguientes propiedades:
  return (
    <button
      className={esBotonDeClick ? 'boton-click' : 'boton-reiniciar'}
      onClick={manejarClick}
    >
      {texto}
    </button>
  );
}

// Exporta el componente 'Boton' para su uso en otros archivos
export default Boton;