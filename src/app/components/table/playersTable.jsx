import React from "react";

export default function PlayersTable({
  jugadores,
  color,
  titulares = true,
  events,
  equipoId,
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
            if (event.detalle !== "Missed Penalty") {
              goalCount++;
              jugadorNombreConEvento += "⚽";
              if (event.detalle === "Own Goal") {
                jugadorNombreConEvento += `(e.c)`;
              }
            }
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

  const eventosGoles = events
    ?.filter(
      (event) =>
        event.evento === "Goal" &&
        event.detalle !== "Missed Penalty" &&
        event.equipoId === equipoId
    )
    .map((event, index) => (
      <div key={index}>
        {`${event.tiempo}${
          event.tiempoExtra ? ` +${event.tiempoExtra}` : ""
        }' ${event.jugador}`}
        {event.detalle === "Own Goal" && " (e.c)"}
        {event.detalle === "Penalty" && " (p)"}
      </div>
    ));

  const eventosTarjetas = events
    ?.filter((event) => event.evento === "Card" && event.equipoId === equipoId)
    .map((event, index) => (
      <div key={index}>
        {`${event.tiempo}${
          event.tiempoExtra ? ` +${event.tiempoExtra}` : ""
        }' ${event.jugador} ${event.detalle === "Yellow Card" ? "🟨" : "🟥"}`}
      </div>
    ));

  const eventosCambios = events
    ?.filter((event) => event.evento === "subst" && event.equipoId === equipoId)
    .map((event, index) => (
      <div key={index}>
        {`${event.tiempo}${
          event.tiempoExtra ? ` +${event.tiempoExtra}` : ""
        }' ${event.jugador} ⇆ ${event.jugadorQueSale}`}
      </div>
    ));

  return (
    <>
      <span
        style={{ backgroundColor: colorTeam, color: colorTeamSecundary }}
        className={`font-bold pl-4 w-80 text-start rounded-t-xl ${
          titulares ? "mt-0" : "mt-10"
        }`}
      >
        {titulares ? "TITULARES" : "SUPLENTES"}
      </span>
      <table
        className={`w-80 ${
          titulares === false && "rounded-b-xl overflow-hidden"
        }`}
      >
        <thead>
          <tr
            style={{ backgroundColor: colorTeam, color: colorTeamSecundary }}
            className={` to-blackBG`}
          >
            <th className="px-2">Pos</th>
            <th className="px-2 text-center">N°</th>
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
                  className=" even:bg-grayPage odd:bg-searchBG"
                >
                  <td className="py-1 w-12 text-center">{player.player.pos}</td>
                  <td className=" w-12 text-center">{player.player.number}</td>
                  <td className=" w-56 text-left pl-2 ">{nombre}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
      {titulares && events.length > 0 && (
        <div className="w-80">
          {eventosGoles.length > 0 && (
            <>
              <span
                style={{
                  backgroundColor: colorTeam,
                  color: colorTeamSecundary,
                }}
                className="font-bold pl-2 w-80 items-center justify-center flex"
              >
                GOLES ⚽
              </span>
              <div className="bg-searchBG p-2">{eventosGoles}</div>
            </>
          )}
          {eventosTarjetas.length > 0 && (
            <>
              <span
                style={{
                  backgroundColor: colorTeam,
                  color: colorTeamSecundary,
                }}
                className="font-bold pl-2 w-80 items-center justify-center flex"
              >
                TARJETAS
              </span>
              <div className="bg-searchBG p-2">{eventosTarjetas}</div>
            </>
          )}
          {eventosCambios.length > 0 && (
            <>
              <span
                style={{
                  backgroundColor: colorTeam,
                  color: colorTeamSecundary,
                }}
                className="font-bold pl-2 w-80 items-center justify-center flex"
              >
                CAMBIOS ⇆
              </span>
              <div className="bg-searchBG p-2 rounded-b-xl">
                {eventosCambios}
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
