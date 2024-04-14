import Buscador from "./components/buscador/buscador";
import Sidebar from "./components/sidebar/sidebar";
import "./globals.css";

export const metadata = {
  title: "Promiedos",
  description: "Estadisticas y partidos de Futbol",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="h-screen grid grid-cols-[250px_1fr] grid-rows-[60px_1fr]">
        <header className="flex justify-between items-center px-10 bg-blackBG border-b-2 border-grayPage col-[2_/_3] row-[1_/_2]">
          <Buscador />
        </header>
        <section className="bg-blackBG border-r-2 border-grayPage col-[1_/_2] row-[1_/_3] p-3 flex flex-col gap-10">
          <Sidebar />
        </section>
        <main className="bg-blackBG col-[2_/_3] row-[2_/_3] p-10">
          {children}
        </main>
      </body>
    </html>
  );
}
