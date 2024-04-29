import React from "react";

export default function PlayersTable({ jugadores, color }) {
  const colorTeam = `#${color.principal}`;
  const colorTeamSecundary = `#${color.secundario}`;
  return (
    <table className="mb-10">
      <thead>
        <tr
          style={{ backgroundColor: colorTeam, color: colorTeamSecundary }}
          className={`border border-greenCard`}
        >
          <th className="px-2 border-r">Pos</th>
          <th className="px-2 border-r text-center">N°</th>
          <th className="px-2 text-left border-r pl-2">Jugador</th>
        </tr>
      </thead>
      <thead>
        {jugadores &&
          jugadores.map((player) => (
            <tr
              key={player.player.id}
              className="border border-greenCard even:bg-grayPage odd:bg-searchBG"
            >
              <td className="border border-greenCard w-12 text-center">
                {player.player.pos}
              </td>
              <td className="border border-greenCard w-12 text-center">
                {player.player.number}
              </td>
              <td className="border border-greenCard w-56 text-left pl-2">
                {player.player.name}
              </td>
            </tr>
          ))}
      </thead>
    </table>
  );
}
