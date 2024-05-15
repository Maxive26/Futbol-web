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
