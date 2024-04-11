import Buscador from "./components/buscador/buscador";
import MatchCard from "./components/matchCard/matchCard";
import teams from "./mocks/teams.json";

export default function Home() {
  const team = {
    nombre: teams.response[0].team.name,
    logo: teams.response[0].team.logo,
    status: teams.response[0].status.status,
  };

  return (
    <>
      <Buscador />
      <MatchCard
        estadio={"Mâs Monumental"}
        estado={team.status}
        horario={"21:00 Hs"}
        team1={{
          escudo: team.logo,
          nombre: team.nombre,
        }}
        team2={{
          escudo: team.logo,
          nombre: team.nombre,
        }}
      />
    </>
  );
}
