import Buscador from "./components/buscador/buscador";
import Sidebar from "./components/sidebar/sidebar";
import FootballBall from "../app/components/icons/footballBall";
import { Poppins } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Promiedos",
  description: "Estadisticas y partidos de Futbol",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="es">
      <body
        className={`${poppins.className} h-screen grid grid-cols-[250px_1fr] grid-rows-[60px_1fr]`}
      >
        <header className="flex justify-between items-center px-10 bg-blackBG border-b-2 border-grayPage col-[2_/_3] row-[1_/_2]">
          <Buscador />
        </header>
        <section className="overflow-auto bg-blackBG border-r-2 border-grayPage col-[1_/_2] row-[1_/_3] p-5 flex flex-col gap-10">
          <Sidebar />
        </section>
        <main className="overflow-auto bg-blackBG col-[2_/_3] row-[2_/_3] px-10 pt-5">
          <h1 className="text-2xl font-semibold mb-4 text-whiteCard flex items-center">
            <span className="mr-2">
              <FootballBall color={"#FFF"} />
            </span>
            PARTIDOS DE HOY
          </h1>
          {children}
        </main>
      </body>
    </html>
  );
}
