import "../styles/tailwind_init.css";
import "../styles/scrollbar.css";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {" "}
        <title>Check Preview</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <main className="transition-all bg-slate-100 min-h-screen  text-slate-800 dark:bg-slate-900 dark:text-emerald-50 custom-font">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
