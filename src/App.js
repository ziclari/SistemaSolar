import React from 'react';
import { useState } from 'react';
import {PLANETAS} from "./DatosPlanetas.js";
import imgFormacion from "./imgMisc/formacion.jpg"
import imgAstronauta from "./imgMisc/astronauta.jpeg"

function MostrarSistema({planetas}){
  const [planetaSeleccionado, setPlanetaSeleccionado] = useState(null);

  const handleClick = (planeta) =>{
    setPlanetaSeleccionado(planeta);
    console.log("Has hecho click: ",planeta.nombre);
  };
  const cerrarModal =() =>{
    setPlanetaSeleccionado(null);
  };

  return(
    <>
    <ul className='sistemaSolar'>
      {planetas.map(planeta => (
        <li id={planeta.id} key={planeta.id} className="planeta" onClick={() => handleClick(planeta)}><span>{planeta.nombre}</span></li>
      ))}
    </ul>
    <MostrarModal planeta={planetaSeleccionado} cerrarModal={cerrarModal}/>
    </>
    
  );
}

function MostrarModal({planeta,cerrarModal}){
  if(!planeta) return null; //si no se le dio click a el planeta
  return(
    <div id='modalPlaneta'>
      <h2>{planeta.nombre}</h2>
      <div className='fila'>
      <img src={planeta.imgGrande} alt={planeta.nombre}/>
      <p>{planeta.info}</p>
      </div>
      
      <button onClick={cerrarModal}>Cerrar</button>
    </div>
  );

}



function App() {
  return (
    <>
    <h1 id='titulo'>El Sistema Solar</h1>
    <MostrarSistema planetas = {PLANETAS}/>
    <p id='parrafoIntro'>El Sistema Solar está formado por el Sol, los diferentes planetas y una multitud de cuerpos menores en el que se encuentran la Tierra y otros objetos astronómicos que giran directa o indirectamente en una órbita alrededor de una única estrella conocida como el Sol. Se conocen más de 2500 estrellas a cuyo alrededor orbita por lo menos un planeta.</p>
    
    <div id='parrafoDerecho'>
      <h2>¿Cómo se formó?</h2>
      <div className='fila'>
      <p >
        El Sistema Solar se formó a partir de una nube gigante de gas y polvo conocida como nebulosa solar hace aproximadamente 4.6 mil millones de años. Esta nebulosa comenzó a colapsar bajo su propia gravedad, y a medida que giraba más rápido, comenzaron a formarse estructuras más densas en su centro.<br></br><br></br> En el centro de esta nebulosa se formó el Sol, mientras que los materiales restantes alrededor de él se agruparon en discos de polvo y gas que eventualmente se fusionaron para formar planetas y otros cuerpos celestes. Esta teoría, conocida como la teoría de la nebulosa solar, explica por qué todos los planetas y objetos en el Sistema Solar orbitan en el mismo plano y giran en la misma dirección alrededor del Sol.  
      </p>
      <img src={imgAstronauta} alt='Astronauta'/>
     </div>
    </div>
    
    <div id='parrafoIzquierdo'>
    <h2>Exploración Espacial</h2>
    <div className='fila'>
    <img src={imgFormacion} alt='Formacion del sistema solar'/>
      
    <p >
      La humanidad ha enviado misiones robóticas a todos los planetas principales y a muchos de sus satélites naturales, así como a asteroides y cometas.
      La exploración espacial futura incluye misiones para estudiar planetas enanos como Plutón y su luna Caronte, así como exploraciones más detalladas de lunas como Europa (de Júpiter) y Titán (de Saturno).
      <br></br><br></br>Más allá de Neptuno, existen regiones del Sistema Solar conocidas como el Cinturón de Kuiper y la Nube de Oort, donde se encuentran numerosos asteroides, cometas y cuerpos helados. Estos objetos proporcionan pistas sobre la historia temprana del Sistema Solar y la posibilidad de que algunos cometas provengan de la Nube de Oort, ubicada mucho más lejos.
    </p>
    </div>
    </div>
    </>
  );
}

export default App;
