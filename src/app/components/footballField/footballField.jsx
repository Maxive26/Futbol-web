import React from "react";

export default function FootballField({ jugadores, index, color }) {
  const colorTeam = `#${color.principal}`;
  const colorTeamSecundary = `#${color.secundario}`;

  const llenarArrayConJugadores = (jugadores) => {
    let array = [];
    for (let i = 0; i < 5; i++) {
      array[i] = [];
      for (let j = 0; j < 5; j++) {
        array[i][j] = { number: "", apellido: "" };
      }
    }

    jugadores.forEach((jugador) => {
      const nombre =
        jugador.player.name.split(" ").length === 1
          ? jugador.player.name
          : jugador.player.name.split(" ").length === 3
          ? jugador.player.name.split(" ")[1] +
            " " +
            jugador.player.name.split(" ")[2]
          : jugador.player.name.split(" ")[1];
      let [x, y] = jugador.player.grid.split(":").map(Number);
      array[x - 1][y - 1].number = jugador.player.number;
      array[x - 1][y - 1].apellido = nombre;
    });

    return array;
  };

  const arrayBidimensional = llenarArrayConJugadores(jugadores);

  const rotateClass = index === 1 ? "rotate-180" : "";
  const img =
    index === 1 ? "bg-[url(/images/can2.png)]" : "bg-[url(/images/can1.webp)]";

  return (
    <div
      className={`flex justify-center h-[330px] w-[340px] ${img} rounded-t-xl bg-no-repeat bg-contain`}
    >
      <table className="border-collapse">
        <tbody className="h-full">
          {arrayBidimensional.map((row, rowIndex) => {
            const gapClass =
              row.filter((cell) => cell.number).length === 5
                ? "gap-1"
                : "gap-4";
            return (
              <tr
                className={`flex justify-center ${gapClass} mb-7 ${rotateClass}`}
                key={rowIndex}
              >
                {row.map((cell, cellIndex) =>
                  cell.number ? (
                    <td
                      style={{
                        backgroundColor: colorTeam,
                        color: colorTeamSecundary,
                      }}
                      className={`font-bold text-centerv w-16 border-2 border-blackBG rounded-full`}
                      key={cellIndex}
                    >
                      <div className="flex text-sm justify-center">
                        {cell.number}
                      </div>
                      <div className="text-xs truncate">{cell.apellido}</div>
                    </td>
                  ) : null
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
