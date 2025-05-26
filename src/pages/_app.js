import "@/styles/globals.css";
import { Bebas_Neue } from "next/font/google";


const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });
export default function App({ Component, pageProps }) {
  return (
    <main className={bebasNeue.className}>
      <Component {...pageProps} />
    </main>
  );
}
