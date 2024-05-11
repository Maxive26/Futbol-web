export const getLeague = async (id, season) => {
  const URL = "https://v3.football.api-sports.io";
  const API_KEY = process.env.NEXT_PUBLIC_FOOTBALL_API_KEY;

  const response = await fetch(
    `${URL}/standings?league=${id}&season=${season}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": `${API_KEY}`,
      },
      cache: "default", //no-store
    }
  );
  console.log("[!Leagues!] Hice el fetch");
  const data = await response.json();

  const mappedLeagues = data.response?.map((league) => ({
    leagueId: league.league.id,
    leagueName: league.league.name,
    leagueCountry: league.league.country,
    leagueLogo: league.league.logo,
    leagueSeason: league.league.season,
    leagueStandings: league.league.standings, //mapear y despues mapear de nuevo, arreglo de arreglos
  }));

  return mappedLeagues;
};

export const getLeaguesMatches = async (id, season) => {
  const URL = "https://v3.football.api-sports.io";
  const API_KEY = process.env.NEXT_PUBLIC_FOOTBALL_API_KEY;

  const response = await fetch(
    `${URL}/fixtures?league=${id}&season=${season}&timezone=America/Argentina/Buenos_Aires`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": `${API_KEY}`,
      },
      cache: "default", //no-store
    }
  );
  console.log("[!LeaguesMatches!] Hice el fetch");
  const data = await response.json();
  const mappedLeaguesMatches = data.response?.map((league) => ({
    matchId: league.fixture.id,
    referi: league.fixture.referee,
    timestamp: league.fixture.timestamp,
    estado: league.fixture.status.short,
    tiempoTranscurrido: league.fixture.status.elapsed,
    leagueId: league.league.id,
    ronda: league.league.round,
    equipoLocalId: league.teams.home.id,
    equipoLocalNombre: league.teams.home.name,
    equipoLocalEscudo: league.teams.home.logo,
    equipoLocalWin: league.teams.home.winner,
    equipoLocalResultado: league.goals.home,
    equipoVisitanteId: league.teams.away.id,
    equipoVisitanteNombre: league.teams.away.name,
    equipoVisitanteEscudo: league.teams.away.logo,
    equipoVisitanteWin: league.teams.away.winner,
    equipoVisitanteResultado: league.goals.away,
  }));
  return mappedLeaguesMatches;
};
