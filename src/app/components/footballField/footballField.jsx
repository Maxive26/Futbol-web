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

    jugadores.forEach((jugador) => {
      const nombre =
        jugador.player.name.split(" ").length === 1
          ? jugador.player.name
          : jugador.player.name.split(" ")[1];
      let [x, y] = jugador.player.grid.split(":").map(Number);
      array[x - 1][y - 1].number = jugador.player.number;
      array[x - 1][y - 1].apellido = nombre; // Obtener el apellido del nombre del jugador
    });

    return array;
  };

  const arrayBidimensional = llenarArrayConJugadores(jugadores);

  const rotateClass = index === 1 ? "rotate-180" : "";

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

//1197147 fixture de ejemplo
