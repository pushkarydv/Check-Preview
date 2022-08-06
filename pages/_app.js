import "../styles/tailwind_init.css";
import "../styles/scrollbar.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <main className="custom-font w-full min-h-screen overflow-x-hidden bg-slate-100 text-slate-700">
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
