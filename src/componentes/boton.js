import React from "react";
import '../hojasdeestilos/boton.css';

function Boton({texto, esBotonDeClick, manejarClick}){
    return (
			<button 
				className={esBotonDeClick ? 'boton-click' : 'boton-reiniciar'}
				onClick={manejarClick} >
				{texto}
			</button>
		);
}

export default Boton