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
        <Links
          href={"/"}
          liga={
            <span className="flex">
              <svg
                width="20"
                height="20"
                stroke="#FFF"
                fill="#FFF"
                strokeWidth="0.5"
                viewBox="0 0 24 24"
                className="mr-3"
              >
                <path d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z"></path>
              </svg>
              Inicio
            </span>
          }
          onClick={onLinkClick}
        />
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
