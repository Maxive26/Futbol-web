"use client";

import React, { useState, useEffect } from "react";

const noticias = [
  {
    id: 1,
    titulo: "Al Ittihad de Benzema se carga a Marcelo Gallardo",
    contenido:
      "El argentino Marcelo Gallardo ya no es entrenador del Al Ittihad, el  equipo de Karim Benzema, con el que, por cierto, el técnico argentino  tuvo muchos problemas. El club de Jeddah",
    imagen:
      "https://phantom-marca.unidadeditorial.es/694e3aaf1eb53d8c8282c171ac2b47c9/resize/1200/f/webp/assets/multimedia/imagenes/2024/05/13/17156349568382.jpg",
  },
  {
    id: 2,
    titulo:
      "Duros golpes para 'Juanfer' Quintero lo sacarían de Racing de Avellaneda y volvería a Colombia",
    contenido:
      "Nadie puede dudar del talento, la calidad y la importancia que tiene Juan Fernando Quintero cuando está al 100 % y conectado con el equipo en el que juega. Sin embargo, esto se ha",
    imagen:
      "https://phantom-marca.unidadeditorial.es/7f6b63e0203c6152681620ed10af7259/resize/1200/f/webp/assets/multimedia/imagenes/2024/05/05/17149214043084.jpg",
  },
  {
    id: 3,
    titulo:
      "Messi liderará a Argentina junto a De Paul, Nahuel, Correa, Acuña y Pezzella",
    contenido:
      "Lionel Scaloni ha dado a conocer la lista de Argentina para los dos amistosos previos -se enfrentará a Guatemala y Ecuador- a la disputa de la Copa América. Una convocatoria de 29",
    imagen:
      "https://phantom-marca.unidadeditorial.es/aa5dc64b7288a56c85ec4adad1bf1f88/resize/1200/f/webp/assets/multimedia/imagenes/2024/05/20/17162165475057.jpg",
  },
  {
    id: 4,
    titulo: "Demichelis en la lista de candidatos para el banquillo del Bayern",
    contenido:
      "El argentino Martin Demichelis, actualmente en el River Plate, está entre los candidatos para relevar a Thomas Tuchel como entrenador del Bayern, asegura el diario muniqués &quot;t",
    imagen:
      "https://phantom-marca.unidadeditorial.es/4c36a3dc1e476b9a1dac4f32523736d9/resize/1200/f/webp/assets/multimedia/imagenes/2024/04/23/17138657672329.jpg",
  },
  {
    id: 5,
    titulo:
      "Así sería la lista de Colombia para Copa América 2024: ¿cuándo sale y las dudas de Lorenzo?",
    contenido:
      "Después de muchas especulaciones y rumores sobre lo que iba a pasar con las listas oficiales de la Copa América 2024, entendiendo que para la Eurocopa aprobaron el aumento de 23 a",
    imagen:
      "https://phantom-marca.unidadeditorial.es/eac280314ab9bacd4e75f7674d40a09c/resize/1200/f/webp/assets/multimedia/imagenes/2024/05/17/17159591371174.jpg",
  },
  {
    id: 6,
    titulo:
      "Florian Wirtz es el gran objetivo del Real Madrid para la temporada 25-26",
    contenido:
      "El club ya trabaja en el alemán. Como hizo con Camavinga, Tchouameni o Bellingham,son fichajes de largo recorrido y en los que hay que invertir horas y horas. No será fácil, pero ya lo pelean  Leer",
    imagen:
      "https://phantom-marca.unidadeditorial.es/6b801ee076cffebb188eab5a13081253/resize/1200/f/webp/assets/multimedia/imagenes/2024/05/11/17154133417345.jpg",
  },
  {
    id: 7,
    titulo:
      '"El entrenador cuenta conmigo": Falcao García sorprende con posible vuelta a la Selección Colombia',
    contenido:
      "Desde los partidos amistosos contra Correa del Sur y Japón, disputados en marzo del 2023, Radamel Falcao García no ha vuelto a ser llamado por Néstor Lorenzo para integrar la Selec",
    imagen:
      "https://phantom-marca.unidadeditorial.es/7e55b30ccc26aa9cda60bda87dc15344/resize/1200/f/webp/assets/multimedia/imagenes/2024/05/21/17162886408860.jpg",
  },
];

export default function NewCard() {
  const [indiceActual, setIndiceActual] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndiceActual((prevIndice) => (prevIndice + 1) % noticias.length);
    }, 10000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <a className="flex w-64" href="#">
      <div className="flex flex-col w-64 h-72  rounded-xl">
        <div className="flex w-full h-3/5 relative">
          <img
            className="w-full h-[172.8px rounded-t-xl"
            src={noticias[indiceActual].imagen}
            alt=""
          />
          <div className="p-2 rounded-t-xl absolute flex text-center justify-center items-center h-16 w-full bottom-0 backdrop-blur-sm bg-blackBG/75">
            <span className="text-whiteCard text-sm ">
              {noticias[indiceActual].titulo}
            </span>
          </div>
        </div>
        <div
          style={{ scrollbarWidth: "thin" }}
          className="p-2 text-sm w-full h-2/5 overflow-y-auto snap-none bg-whiteCard/75"
        >
          <p>{noticias[indiceActual].contenido}</p>
        </div>
      </div>
    </a>
  );
}
