import team from "@/app/mocks/teams.json";
import players from "@/app/mocks/PlayersTeam.json";
export const getTeam = async (id) => {
  // const data = team;
  const URL = "https://v3.football.api-sports.io";
  const API_KEY = process.env.NEXT_PUBLIC_FOOTBALL_API_KEY;

  const response = await fetch(`${URL}/teams?id=${id}`, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "v3.football.api-sports.io",
      "x-rapidapi-key": `${API_KEY}`,
    },
  });
  console.log("[!Team!] Hice el fetch");
  const data = await response.json();
  const mappedTeam = data.response?.map((team) => ({
    id: team.team.id,
    nombre: team.team.name,
    ciudad: team.team.country,
    fundacion: team.team.founded,
    escudo: team.team.logo,
    estadioId: team.venue.id,
    estadioNombre: team.venue.name,
    estadioDireccion: team.venue.address,
    estadioCiudad: team.venue.city,
    estadioCapacidad: team.venue.capacity,
  }));
  return mappedTeam;
};

export const getPlayersTeam = async (id) => {
  // const data = players;
  const URL = "https://v3.football.api-sports.io";
  const API_KEY = process.env.NEXT_PUBLIC_FOOTBALL_API_KEY;

  const response = await fetch(`${URL}/players/squads?team=${id}`, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "v3.football.api-sports.io",
      "x-rapidapi-key": `${API_KEY}`,
    },
  });
  console.log("[!TeamPlayers!] Hice el fetch");
  const data = await response.json();
  const mappedTeam = data.response?.map((team) => ({
    jugadores: team.players.map((player) => ({
      id: player.id,
      nombre: player.name,
      edad: player.age,
      numero: player.number,
      posicion: player.position,
      foto: player.photo,
    })),
  }));
  return mappedTeam;
};

export const getMatchesForTeam = async (id, season = 2024) => {
  const URL = "https://v3.football.api-sports.io";
  const API_KEY = process.env.NEXT_PUBLIC_FOOTBALL_API_KEY;
  const TIMEZONE = "America/Argentina/Buenos_Aires";
  const response = await fetch(
    `${URL}/fixtures?season=${season}&team=${id}&timezone=${TIMEZONE}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": `${API_KEY}`,
      },
      cache: "no-store",
    }
  );
  console.log("[!TeamPlayersMatches!] Hice el fetch");
  const data = await response.json();
  if (data.response.length === 0) {
    return getMatchesForTeam(id, 2023);
  }
  const mappedTeam = data.response?.map((match) => ({
    fecha: match.fixture.timestamp,
    estado: match.fixture.status.short,
    local: match.teams.home.name,
    localId: match.teams.home.id,
    visitante: match.teams.away.name,
    localEscudo: match.teams.home.logo,
    visitanteEscudo: match.teams.away.logo,
    visitanteId: match.teams.away.id,
    resultadoLocal: match.goals.home,
    resultadoVisitante: match.goals.away,
    idFixture: match.fixture.id,
  }));
  return mappedTeam;
};
