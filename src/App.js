
import './App.css';
import inicialeslogo from './imagenes/iniciales3.jpg'
import Boton from './componentes/boton';


function App() {

  const manejarClick = () => {
    console.log('Click');
  }

  const reiniciarCont = () => {
    console.log ('Reinicar')
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo' src={inicialeslogo} alt='Logo de freecodecamp'/>
      </div> 
      <div className='contenedor-principal'>
        <Boton
        texto='Click'
        esBotonDeClick={true}
        manejarClick={manejarClick}
        />
        <Boton
        texto='Reiniciar'
        esBotonDeClick={false}
        manejarClick={reiniciarCont}
        />
      
      </div>
      
    </div>
  );
}

export default App;
