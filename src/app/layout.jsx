import Sidebar from "@/app/components/sidebar/sidebar";
import { Poppins } from "next/font/google";
import "./globals.css";
import { SkeletonTheme } from "react-loading-skeleton";
import TopHeader from "./components/topHeader/TopHeader";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: {
    default: "Inicio | Futbolita",
    template: "%s | Futbolita",
  },
  description:
    "Página web con información de todos los partidos de fútbol, ligas y competiciones, incluyendo tablas de posiciones, detalles de encuentros y datos de equipos.",
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "Futbolita",
    description:
      "Página web con información de todos los partidos de fútbol, ligas y competiciones, incluyendo tablas de posiciones, detalles de encuentros y datos de equipos.",
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
        <section className="hidden lg:flex overflow-auto bg-blackBG border-r-2 border-grayPage lg:col-[1_/_2] lg:row-[1_/_3] p-5 flex-col gap-10 scrollbar-thin scrollbar-thumb-greenCard scrollbar-track-grayPage">
          <Sidebar />
        </section>
        <SkeletonTheme baseColor="#313131" highlightColor="#525252">
          <main className="overflow-auto bg-blackBG lg:col-[2_/_3] lg:row-[2_/_3] px-5 lg:px-10 py-5 scrollbar-thin scrollbar-thumb-greenCard scrollbar-track-grayPage">
            {children}
            <Analytics />
          </main>
        </SkeletonTheme>
      </body>
    </html>
  );
}
