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
        <Links href={"#"} liga={"Liga Profesional"} />
        <Links href={"#"} liga={"Premier League"} />
        <Links href={"#"} liga={"Serie A"} />
        <Links href={"#"} liga={"Brasileirao"} />
      </div>
    </>
  );
}
