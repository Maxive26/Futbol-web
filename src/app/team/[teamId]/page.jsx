import FootballBall from "@/app/components/icons/footballBall";
import Stadium from "@/app/components/icons/stadium";
import Link from "next/link";
import {
  getTeam,
  getPlayersTeam,
  getMatchesForTeam,
} from "@/app/services/Team";
import Plus from "@/app/components/icons/plus";

export default async function page({ params }) {
  const { teamId } = params;
  const data = await getTeam(teamId);
  const players = await getPlayersTeam(teamId);
  const fixture = await getMatchesForTeam(teamId);
  fixture.sort((a, b) => a.fecha - b.fecha);

  var today = new Date();
  var year = today.getFullYear();

  function convertirTimestamp(timestamp) {
    const fecha = new Date(timestamp * 1000);
    const dia = ("0" + fecha.getDate()).slice(-2);
    const mes = ("0" + (fecha.getMonth() + 1)).slice(-2);
    const fechaFormateada = `${dia}/${mes}`;
    return fechaFormateada;
  }
  function obtenerDosPrimerasPalabras(oracion) {
    const palabras = oracion.split(" ");

    if (palabras.length >= 2) {
      return `${palabras[0]} ${palabras[1]}`;
    } else {
      return palabras[0] || "";
    }
  }

  return (
    <section>
      <div className="flex items-center mb-4 justify-between">
        <h1 className="text-2xl sm:font-semibold text-whiteCard  flex items-center">
          <span className="mr-2">
            <FootballBall color={"#FFF"} />
          </span>
          INFORMACIÓN DEL EQUIPO
        </h1>
        <Link
          href={"/"}
          className="text-whiteCard font-semibold py-1 flex justify-center items-center bg-grayPage w-28 transition ease-out border-2 border-greenCard  px-3 rounded-xl hover:bg-greenCard hover:text-blackBG"
        >
          Volver
        </Link>
      </div>
      <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 bg-grayPage rounded-xl p-5 gap-10">
        {data?.map((team, index) => (
          <div
            key={team.id}
            className="flex flex-col p-3 items-center  text-whiteCard "
          >
            <div className=" p-3 flex justify-center items-center rounded-full bg-blackBG w-64 h-64 shadow-inner shadow-grayCard">
              <img
                src={team.escudo}
                alt="Escudo del equipo"
                className="w-48 h-48"
              />
            </div>

            <h2 className="text-whiteCard font-bold text-2xl mt-10">
              - {team.nombre.toUpperCase()} -
            </h2>

            <div className="flex flex-col justify-start items-start mt-5 w-full">
              <span className="mb-2">
                <span className="font-bold text-greenCard">Pais: </span>
                {team.ciudad}, {team.estadioCiudad}
              </span>
              <span>
                <span className="font-bold text-greenCard">Fundación: </span>
                {team.fundacion} ({year - team.fundacion} Años)
              </span>
              <Link className="mt-10" href={"/"}>
                <h3 className="text-whiteCard flex font-bold text-xl hover:text-greenCard">
                  <span className="mr-3">
                    <Stadium color={"#FFF"} opacity={0.6} />
                  </span>
                  {team.estadioNombre}
                </h3>
              </Link>
              <span className="my-2">
                <span className="font-bold text-greenCard">Capacidad: </span>
                {team.estadioCapacidad} espectadores
              </span>
              <span className="">
                <span className="font-bold text-greenCard">Dirección: </span>
                {team.estadioDireccion}
              </span>
            </div>
          </div>
        ))}

        <div className="flex flex-col">
          <h2 className="text-whiteCard font-bold text-xl mb-5">FIXTURE</h2>
          <table className="mb-10 w-80">
            <thead>
              <tr className={`border border-greenCard`}>
                <th className="px-2 text-whiteCard font-normal border-r border-greenCard text-center">
                  Dia
                </th>
                <th className="px-2 text-whiteCard font-normal border-r border-greenCard text-center">
                  L/V
                </th>
                <th className="px-2 flex justify-center items-center text-whiteCard font-normal text-left w-52 border-greenCard border-r">
                  <img
                    src={data[0].escudo}
                    alt="Escudo del equipo"
                    className="w-5 h-5 "
                  />
                  {data[0].nombre.toUpperCase()} vs
                </th>
                <th className="px-2 text-whiteCard font-normal text-center border-greenCard border-r ">
                  Res
                </th>
                <th className="px-2 text-whiteCard font-normal text-center border-greenCard border-r">
                  Info
                </th>
              </tr>
            </thead>
            <tbody>
              {fixture.map((match, i) =>
                match.estado === "CANC" ? null : (
                  <tr
                    key={match.idFixture}
                    className="border text-whiteCard  border-greenCard even:bg-grayPage odd:bg-searchBG"
                  >
                    <td className="border border-greenCard px-2 text-center">
                      {convertirTimestamp(match.fecha)}
                    </td>
                    <td className="border border-greenCard text-center font-bold">
                      {match.localId == teamId ? "L" : "V"}
                    </td>
                    <td className="flex items-center w-52 text-left pl-2 truncate ">
                      <img
                        src={
                          match.localId == teamId
                            ? match.visitanteEscudo
                            : match.localEscudo
                        }
                        className="w-5 h-5 mr-2"
                        alt=""
                      />
                      {match.localId == teamId
                        ? obtenerDosPrimerasPalabras(match.visitante)
                        : obtenerDosPrimerasPalabras(match.local)}
                      {["1H", "HT", "2H", "BT", "P", "ET"].includes(
                        match.estado
                      ) ? (
                        <div className="ml-2 w-3 h-3 bg-red rounded-full animate-pulse"></div>
                      ) : (
                        ""
                      )}
                    </td>
                    <td
                      className={`border font-bold border-greenCard  truncate text-center ${
                        match.resultadoLocal == null ||
                        match.resultadoVisitante == null
                          ? ""
                          : (match.localId == teamId &&
                              match.resultadoLocal >
                                match.resultadoVisitante) ||
                            (match.localId != teamId &&
                              match.resultadoLocal < match.resultadoVisitante)
                          ? "bg-firstTeam text-blackBG  "
                          : match.resultadoLocal === match.resultadoVisitante
                          ? "bg-yellow text-blackBG"
                          : "bg-red"
                      }`}
                    >
                      {match.resultadoLocal == null ||
                      match.resultadoVisitante == null
                        ? "-"
                        : match.localId == teamId
                        ? `${match.resultadoLocal} - ${match.resultadoVisitante}`
                        : `${match.resultadoVisitante} - ${match.resultadoLocal}`}
                    </td>
                    <td className="flex justify-center items-center mt-1">
                      {match.estado !== "NS" &&
                        match.estado !== "TBD" &&
                        match.estado !== "PST" && (
                          <Link
                            href={`/fixture/${match.idFixture}`}
                            className="w-5 h-full bg-firstTeam flex justify-center items-center"
                          >
                            <Plus color={"#fff"} />
                          </Link>
                        )}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
        <div className="flex flex-col">
          <h2 className="text-whiteCard mb-5 font-bold text-xl">PLANTEL </h2>
          {players?.map((players, index) =>
            players.jugadores.map((player, index) =>
              player.numero === null ? (
                ""
              ) : (
                <div
                  key={player.id}
                  className="flex w-3/4 flex-col odd:bg-grayPage even:bg-blackBG text-whiteCard items-center"
                >
                  <div className="w-full grid rounded relative grid-rows-2 border-x-2 border-y border-greenCard ">
                    <div className="flex items-center">
                      <span className="w-8 text-center font-bold mr-4 text-blackBG bg-grayCard">
                        {player.numero}
                      </span>
                      <span className="tracking-wider">{player.nombre}</span>
                      <span className="absolute right-0 mx-3 text-sm">
                        {player.edad} años
                      </span>
                    </div>
                    <div className="border-t border-grayCard border-opacity-10">
                      <span className="mx-3 text-sm">{player.posicion}</span>
                    </div>
                  </div>
                </div>
              )
            )
          )}
        </div>
      </div>
    </section>
  );
}
