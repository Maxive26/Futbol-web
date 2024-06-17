import fixtureEvents from "@/app/mocks/fixtureEvents.json";
export const getMatchInfo = async (fixtureID) => {
  const URL = "https://v3.football.api-sports.io";
  const API_KEY = process.env.NEXT_PUBLIC_FOOTBALL_API_KEY;

  const response = await fetch(`${URL}/fixtures/lineups?fixture=${fixtureID}`, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "v3.football.api-sports.io",
      "x-rapidapi-key": `${API_KEY}`,
    },
    cache: "default",
  });
  console.log("[!MatchInfo!] Hice el fetch");

  const data = await response.json();

  const mappedFormation = data.response?.map((team) => ({
    color: team.team.colors?.player.primary,
    colorSecundario: team.team.colors?.player.number,
    equipo: team.team.name,
    idEquipo: team.team.id,
    escudo: team.team.logo,
    formacion: team.formation,
    entrenador: team.coach.name,
    jugadores: team.startXI,
    suplentes: team.substitutes,
  }));

  return mappedFormation;
};

export const getEvents = async (fixtureID) => {
  const URL = "https://v3.football.api-sports.io";
  const API_KEY = process.env.NEXT_PUBLIC_FOOTBALL_API_KEY;

  const response = await fetch(`${URL}/fixtures/events?fixture=${fixtureID}`, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "v3.football.api-sports.io",
      "x-rapidapi-key": `${API_KEY}`,
    },
    cache: "no-store",
  });
  console.log("[!MatchEventsInfo!] Hice el fetch");

  const data = await response.json();

  const mappedEvents = data.response?.map((event) => ({
    tiempo: event.time.elapsed,
    tiempoExtra: event.time.extra,
    equipo: event.team.name,
    equipoId: event.team.id,
    jugador: event.player.name,
    jugadorId: event.player.id,
    jugadorQueSale: event.assist.name,
    jugadorQueSaleId: event.assist.id,
    evento: event.type,
    detalle: event.detail,
  }));
  return mappedEvents;
};
