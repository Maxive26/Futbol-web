import Links from "./link";
import Logo from "./logo";

export default function Sidebar() {
  return (
    <>
      <div className="h-10">
        <Logo />
      </div>
      <div className=" text-whiteCard flex flex-col gap-2">
        <Links href={"/"} liga={"Inicio"} />
        <br />
        <span>LIGAS</span>
        <Links href={"/ligas/copadelaliga"} liga={"Copa de la liga"} />
        <Links href={"/ligas/ligaProfesional"} liga={"Liga Profesional"} />
        <Links href={"/ligas/premierLeague"} liga={"Premier League"} />
        <Links href={"/ligas/laLiga"} liga={"La Liga"} />
        <Links href={"/ligas/serieA"} liga={"Serie A"} />
        <Links href={"/ligas/brasileirao"} liga={"Brasileirao"} />
      </div>
    </>
  );
}
