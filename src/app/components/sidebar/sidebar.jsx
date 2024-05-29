"use client";
import Links from "./link";
import Logo from "./logo";

export default function Sidebar({ onLinkClick }) {
  return (
    <>
      <div className="h-10">
        <Logo />
      </div>
      <div className=" text-whiteCard flex flex-col gap-2">
        <Links href={"/"} liga={"Inicio"} onClick={onLinkClick} />
        <br />
        <span className="font-bold text-xl ml-2">LIGAS</span>
        <Links
          href={"/ligas/ligaProfesional"}
          liga={"Liga Profesional"}
          onClick={onLinkClick}
        />
        <Links
          href={"/ligas/premierLeague"}
          liga={"Premier League"}
          onClick={onLinkClick}
        />
        <Links href={"/ligas/laLiga"} liga={"La Liga"} onClick={onLinkClick} />
        <Links href={"/ligas/serieA"} liga={"Serie A"} onClick={onLinkClick} />
        <Links
          href={"/ligas/brasileirao"}
          liga={"Brasileirao"}
          onClick={onLinkClick}
        />
        <span className="font-bold text-xl ml-2">COPAS</span>
        <Links
          href={"/ligas/copadelaliga"}
          liga={"Copa de la liga"}
          onClick={onLinkClick}
        />
        <Links
          href={"/ligas/libertadores"}
          liga={"Copa Libertadores"}
          onClick={onLinkClick}
        />
        <Links
          href={"/ligas/sudamericana"}
          liga={"Copa Sudamericana"}
          onClick={onLinkClick}
        />
        <Links
          href={"/ligas/championsleague"}
          liga={"Champions League"}
          onClick={onLinkClick}
        />
        <Links
          href={"/ligas/copaArgentina"}
          liga={"Copa Argentina"}
          onClick={onLinkClick}
        />
      </div>
    </>
  );
}
