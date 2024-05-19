export const getMatchInfo = async (fixtureID) => {
  const URL = "https://v3.football.api-sports.io";
  const API_KEY = process.env.NEXT_PUBLIC_FOOTBALL_API_KEY;

  const response = await fetch(`${URL}/fixtures/lineups?fixture=${fixtureID}`, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "v3.football.api-sports.io",
      "x-rapidapi-key": `${API_KEY}`,
    },
  });
  console.log("[!MatchInfo!] Hice el fetch");

  const data = await response.json();

  const mappedFormation = data.response?.map((team) => ({
    color: team.team.colors.player.primary,
    colorSecundario: team.team.colors.player.number,
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
