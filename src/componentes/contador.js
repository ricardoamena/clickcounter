// Importa la librería React
import React from "react";

// Importa el archivo CSS para estilos específicos del contador
import '../hojasdeestilos/contador.css';

// Define el componente funcional 'Contador'
function Contador({numClick}) {
    // Renderiza un div con la clase 'contador' y muestra el valor de 'numClick'
    return (
        <div className="contador">
            {numClick}
        </div>
    );
}

// Exporta el componente 'Contador' para su uso en otros archivos
export default Contador;