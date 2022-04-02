import "../styles/globals.css";
import { Navbar } from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-purple-100 text-3xl">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
