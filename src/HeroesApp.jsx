import "./App.css";
import { AppRouter } from "./router/AppRouter";

export function HeroesApp() {
 
  return (
    <>
    <AppRouter />
    </>
  );
}

/*
import { useState, useEffect } from "react";


export function HeroesApp() {
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
    <>
    <AppRouter />
    <div className="App">
      <h1>
        {heroes.map((heroe) => {
          <div key="heroe.id">
            <h1>{heroe.nombre}</h1>
            <h1>{heroe.editorial}</h1>
          </div>;
        })}
      </h1>
    </div>
    </>
  );
}

*/