import Buscador from "@/app/components/buscador/buscador";
import Sidebar from "@/app/components/sidebar/sidebar";
import { Poppins } from "next/font/google";
import "./globals.css";
import ChangueThemeIcon from "./components/changueThemeIcon/changueThemeIcon";
import { SkeletonTheme } from "react-loading-skeleton";
import MenuIcon from "./components/icons/Menu";
import TopHeader from "./components/topHeader/TopHeader";

export const metadata = {
  title: "Futbolita",
  description:
    "Pagina web sobre partidos de futbol y todos los paices y todas las competiciones, con tablas de posiciones, informaciones del encuentro, informaciones de equipos, entre otras funcionalidades",
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "Futbolita",
    description:
      "Pagina web sobre partidos de futbol y todos los paices y todas las competiciones, con tablas de posiciones, informaciones del encuentro, informaciones de equipos, entre otras funcionalidades",
    images: "https://i.ibb.co/7t9HXQ1/LOGO-PROEMIDOS-2.png",
  },
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="es">
      <body
        className={`${poppins.className} h-screen flex flex-col lg:grid bg-blackBG  lg:grid-cols-[250px_1fr] lg:grid-rows-[60px_1fr]`}
      >
        <header className="flex relative justify-between items-center  bg-blackBG border-b-2 border-grayPage col-[2_/_3] lg:col-[2_/_3] lg:row-[1_/_2]">
          <TopHeader />
        </header>
        <section className="hidden lg:flex overflow-auto bg-blackBG border-r-2 border-grayPage lg:col-[1_/_2] lg:row-[1_/_3] p-5 flex-col gap-10">
          <Sidebar />
        </section>
        <SkeletonTheme baseColor="#313131" highlightColor="#525252">
          <main className="overflow-auto bg-blackBG lg:col-[2_/_3] lg:row-[2_/_3] px-5 lg:px-10 py-5 scrollbar-thin scrollbar-thumb-greenCard scrollbar-track-grayPage">
            {children}
          </main>
        </SkeletonTheme>
      </body>
    </html>
  );
}
