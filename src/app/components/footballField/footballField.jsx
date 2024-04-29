import React from "react";
import Image from "next/image";

export default function FootballField({ jugadores, index, color }) {
  const colorTeam = `#${color.principal}`;
  const colorTeamSecundary = `#${color.secundario}`;
  const llenarArrayConJugadores = (jugadores) => {
    // Crear un array 5x5
    let array = [];
    for (let i = 0; i < 5; i++) {
      array[i] = [];
      for (let j = 0; j < 5; j++) {
        array[i][j] = { number: "", apellido: "" }; // Inicialmente, todas las posiciones están vacías
      }
    }

    // Llenar el array con los jugadores según las posiciones devueltas por la API
    jugadores.forEach((jugador) => {
      let [x, y] = jugador.player.grid.split(":").map(Number);
      array[x - 1][y - 1].number = jugador.player.number;
      array[x - 1][y - 1].apellido = jugador.player.name.split(" ")[1]; // Obtener el apellido del nombre del jugador
    });

    return array;
  };

  // Llenar el array con los jugadores
  const arrayBidimensional = llenarArrayConJugadores(jugadores);

  const rotateClass = index === 1 ? "rotate-180" : "";

  // Renderizar el array dentro de una tabla
  return (
    <div
      className={`flex justify-center h-[330px] w-[340px] bg-[url(/images/can1.webp)] bg-no-repeat bg-contain`}
    >
      <table className=" border-collapse ">
        <tbody className="h-full">
          {arrayBidimensional.map((row, rowIndex) => (
            <tr
              className={`flex justify-center gap-5 mb-3 ${rotateClass}`}
              key={rowIndex}
            >
              {row.map((cell, cellIndex) =>
                // Renderizar la celda solo si hay un número de jugador
                cell.number ? (
                  <td
                    style={{
                      backgroundColor: colorTeam,
                      color: colorTeamSecundary,
                    }}
                    className={`font-bold text-center w-16 border-2 border-blackBG rounded-full`}
                    key={cellIndex}
                  >
                    <div>{cell.number}</div>
                    <div className="text-xs">{cell.apellido}</div>
                  </td>
                ) : null
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// <div className="flex justify-center items-center h-screen">
//   <div className="football-field w-96 h-60 rotate-90 bg-firstTeam border-2 border-greenCard relative">
//     <div className="goalpost w-1 h-24 bg-whiteCard absolute left-0 top-1/2 transform -translate-y-1/2"></div>
//     <div className="goalpost w-1 h-24 bg-whiteCard absolute right-0 top-1/2 transform -translate-y-1/2"></div>
//     <div className="midline w-0.5 h-full bg-whiteCard absolute top-0 left-1/2 transform -translate-x-1/2"></div>
//     <div className="center-circle w-24 h-24 border-2 border-whiteCard rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
//   </div>
// </div>

//1197147 fixture de ejemplo
