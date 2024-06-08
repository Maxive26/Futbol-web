"use client";
import Links from "./link";
import Logo from "./logo";

export default function Sidebar({ onLinkClick }) {
  const LINKS = [
    {
      id: "128",
      href: "/ligas/ligaProfesional",
      liga: "Liga Profesional",
      competicion: "liga",
    },
    {
      id: "39",
      href: "/ligas/premierLeague",
      liga: "Premier League",
      competicion: "liga",
    },
    {
      id: "140",
      href: "/ligas/laLiga",
      liga: "La Liga",
      competicion: "liga",
    },
    {
      id: "135",
      href: "/ligas/serieA",
      liga: "Serie A",
      competicion: "liga",
    },
    {
      id: "71",
      href: "/ligas/brasileirao",
      liga: "Brasileirao",
      competicion: "liga",
    },
    {
      id: "1032",
      href: "/ligas/copaDeLaLiga",
      liga: "Copa de la liga",
      competicion: "copa",
    },
    {
      id: "13",
      href: "/ligas/libertadores",
      liga: "Libertadores",
      competicion: "copa",
    },
    {
      id: "11",
      href: "/ligas/sudamericana",
      liga: "Sudamericana",
      competicion: "copa",
    },
    {
      id: "2",
      href: "/ligas/championsLeague",
      liga: "Champions League",
      competicion: "copa",
    },
    {
      id: "130",
      href: "/ligas/copaArgentina",
      liga: "Copa Argentina",
      competicion: "copa",
    },
    {
      id: "9",
      href: "/ligas/copaAmerica",
      liga: "Copa América",
      competicion: "copa",
    },
    {
      id: "4",
      href: "/ligas/eurocopa",
      liga: "Eurocopa",
      competicion: "copa",
    },
  ];
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
        {LINKS.map((enlace, index) => (
          <>
            {index === 0 && (
              <span className="font-bold text-xl ml-2">LIGAS</span>
            )}
            {index === 5 && (
              <span className="font-bold text-xl ml-2">COPAS</span>
            )}
            <Links
              key={enlace.id}
              href={enlace.href}
              liga={enlace.liga}
              onClick={onLinkClick}
            />
          </>
        ))}
      </div>
    </>
  );
}
