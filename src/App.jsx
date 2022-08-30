import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    llamarNuestraApi();
  }, []);

  const llamarNuestraApi = async () => {
    const respuesta = await fetch(
      "http://localhost:4000/superheroes"
    );
    const datos = await respuesta.json();
    setHeroes(datos);
  };

  return (
    <div className="App">
      <h1>
        Hola Api
        {heroes.map((heroe) => {
          <div key="heroe.id">
            <h1>{heroe.nombre}</h1>
            <h1>{heroe.editorial}</h1>
          </div>;
        })}
      </h1>
    </div>
  );
}

export default App;
