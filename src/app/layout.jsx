import Buscador from "@/app/components/buscador/buscador";
import Sidebar from "@/app/components/sidebar/sidebar";
import { Poppins } from "next/font/google";
import "./globals.css";
import ChangueThemeIcon from "./components/changueThemeIcon/changueThemeIcon";
import { SkeletonTheme } from "react-loading-skeleton";

export const metadata = {
  title: "Promiedos",
  description: "Partidos y estadisticas de Fútbol",
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "Promiedos",
    description: "Partidos y estadisticas de Fútbol",
    images:
      "https://www.infobae.com/new-resizer/PYW0Co1m7dyZpwOXvjSi8TzbvMw=/1200x900/filters:format(webp):quality(85)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/12/09192945/River-vs-Boca-Final-Copa-Libertadores-280.jpg",
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
        className={`${poppins.className} h-screen grid grid-cols-[250px_1fr] grid-rows-[60px_1fr]`}
      >
        <header className="flex justify-between items-center px-10 bg-blackBG border-b-2 border-grayPage col-[2_/_3] row-[1_/_2]">
          <Buscador />
          <ChangueThemeIcon />
        </header>
        <section className="overflow-auto bg-blackBG border-r-2 border-grayPage col-[1_/_2] row-[1_/_3] p-5 flex flex-col gap-10">
          <Sidebar />
        </section>
        <SkeletonTheme baseColor="#313131" highlightColor="#525252">
          <main className="overflow-auto bg-blackBG col-[2_/_3] row-[2_/_3] md:px-10 md:py-5 scrollbar-thin scrollbar-thumb-greenCard scrollbar-track-grayPage">
            {children}
          </main>
        </SkeletonTheme>
      </body>
    </html>
  );
}
