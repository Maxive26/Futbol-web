import React from "react";

export default function PlayersTable({
  jugadores,
  color,
  titulares = true,
  events,
}) {
  const colorTeam = `#${color.principal}`;
  const colorTeamSecundary = `#${color.secundario}`;

  const nombresConEventos = (jugadorID, jugadorNombre) => {
    if (jugadorID === null) {
      return jugadorNombre;
    }

    let jugadorNombreConEvento = jugadorNombre;
    let goalCount = 0;
    events?.forEach((event) => {
      if (jugadorID === event.jugadorId) {
        switch (event.evento) {
          case "Goal":
            goalCount++;
            jugadorNombreConEvento += "⚽";
            break;
          case "Card":
            jugadorNombreConEvento +=
              event.detalle === "Yellow Card" ? "🟨" : "🟥";
            break;
          case "subst":
            jugadorNombreConEvento += "⏩";
            break;
        }
      }
      if (jugadorID === event.jugadorQueSaleId && event.evento != "Goal") {
        jugadorNombreConEvento += "⏪";
      }
    });

    return { nombre: jugadorNombreConEvento, goles: goalCount };
  };

  return (
    <>
      <span
        style={{ backgroundColor: colorTeam, color: colorTeamSecundary }}
        className="font-bold pl-2 w-80 text-start"
      >
        {titulares ? "TITULARES" : "SUPLENTES"}
      </span>
      <table className="mb-10 w-80">
        <thead>
          <tr
            style={{ backgroundColor: colorTeam, color: colorTeamSecundary }}
            className={`border-t to-blackBG`}
          >
            <th className="px-2 border-r">Pos</th>
            <th className="px-2 border-r text-center">N°</th>
            <th className="px-2 text-left pl-2">Jugador</th>
          </tr>
        </thead>
        <tbody className="">
          {jugadores &&
            jugadores.map((player) => {
              const { nombre, goles } = nombresConEventos(
                player.player.id,
                player.player.name
              );
              return (
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
                  <td className="flex w-56 text-left pl-2 truncate">
                    {nombre}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}
