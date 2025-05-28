import { MusicProvider } from "@/context/MusicContext";
import "@/styles/globals.css";
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });
export default function App({ Component, pageProps }) {

  const pagesToPlayOn = [
    "/",
    "/info",
    "/result",
  ];


  return (
    <main className={bebasNeue.className}>
      <MusicProvider musicUrl="/music/global.wav" pagesToPlayOn={pagesToPlayOn}>
        <Component {...pageProps} />
      </MusicProvider>
    </main>
  );
}
