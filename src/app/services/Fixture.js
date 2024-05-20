export const getFixtures = async (tomorrow) => {
  function getCurrentDate(tomorrow) {
    const date = new Date();
    date.setDate(date.getDate() + tomorrow);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const dateFormated = `${year}-${month}-${day}`;

    return dateFormated;
  }
  const CURRENT_DAY = getCurrentDate(tomorrow);
  const URL = "https://v3.football.api-sports.io";
  const API_KEY = process.env.NEXT_PUBLIC_FOOTBALL_API_KEY;

  const response = await fetch(
    `${URL}/fixtures?&date=${CURRENT_DAY}&timezone=America/Argentina/Buenos_Aires`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": `${API_KEY}`,
      },
      cache: "default", //no-store
    }
  );
  console.log("[!Fixture!] Hice el fetch");
  const data = await response.json();
  const requiredLeagues = [
    906, 1032, 135, 39, 128, 140, 71, 78, 61, 13, 2, 239, 11, 16, 3, 848, 130,
    268, 250, 265, 262, 866,
  ];
  const matches = data.response.filter((match) =>
    requiredLeagues.includes(match.league.id)
  );

  const mappedMatches = matches?.map((match) => ({
    idLiga: match.league.id,
    logoLiga: match.league.logo,
    logoPais: match.league.flag,
    ronda: match.league.round,
    nombreLiga: match.league.name,
    paisLiga: match.league.country,
    idFixture: match.fixture.id,
    referi: match.fixture.referee,
    horario: match.fixture.timestamp,
    tiempoTranscurrido: match.fixture.status.elapsed,
    primerTiempo: match.fixture.periods.first,
    segundoTiempo: match.fixture.periods.second,
    estadio: match.fixture.venue.name,
    estado: match.fixture.status.short,
    equipoLocalNombre: match.teams.home.name,
    equipoLocalEscudo: match.teams.home.logo,
    equipoLocalResultado: match.goals.home,
    equipoLocalResultadoPen: match.score.penalty.home,
    equipoVisitanteNombre: match.teams.away.name,
    equipoVisitanteEscudo: match.teams.away.logo,
    equipoVisitanteResultado: match.goals.away,
    equipoVisitanteResultadoPen: match.score.penalty.away,
  }));
  return mappedMatches;
};
