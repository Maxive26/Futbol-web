import { getMatchesForTeam } from "@/app/services/Team";
import Plus from "../icons/plus";
import Link from "next/link";

export default async function FixtureTableTeams({ teamId, image, nombre }) {
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
    <div className="flex flex-col">
      <h2 className="text-whiteCard font-bold text-xl mb-5">FIXTURE</h2>
      <table className="mb-10 w-40 md:w-80 border-collapse rounded-xl overflow-hidden p-3">
        <thead className="bg-searchBG text-whiteCard/50">
          <tr>
            <th className="px-2 p-3 font-normal text-center">Dia</th>
            <th className="text-sm md:text-base md:px-2  font-normal text-center">
              L/V
            </th>
            <th className="text-sm p-3 md:text-base md:px-2 flex  items-center text-whiteCard truncate font-normal text-left w-auto md:w-52 ">
              <img
                src={image}
                alt="Escudo del equipo"
                className="max-w-5 max-h-5 mr-2"
              />
              {nombre.toUpperCase()} vs
            </th>
            <th className="px-2  font-normal text-center  ">Res</th>
            <th className="px-2  font-normal text-center ">Info</th>
          </tr>
        </thead>
        <tbody>
          {fixture.map((match, i) =>
            match.estado === "CANC" ? null : (
              <tr
                key={match.idFixture}
                className=" text-whiteCard  even:bg-grayPage odd:bg-searchBG"
              >
                <td className="text-sm md:text-base  md:px-2 text-center">
                  {convertirTimestamp(match.fecha)}
                </td>
                <td className="text-sm md:text-base md:px-2  text-center font-bold">
                  {match.localId == teamId ? "L" : "V"}
                </td>
                <td className="text-sm md:text-base flex items-center w-auto md:w-52 text-left md:pl-2 truncate ">
                  <img
                    src={
                      match.localId == teamId
                        ? match.visitanteEscudo
                        : match.localEscudo
                    }
                    className="max-w-5 max-h-5 md:mr-2"
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
                  className={` font-bold  truncate text-center ${
                    match.resultadoLocal == null ||
                    match.resultadoVisitante == null
                      ? ""
                      : (match.localId == teamId &&
                          match.resultadoLocal > match.resultadoVisitante) ||
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
                <td className="flex items-center justify-center">
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
  );
}
