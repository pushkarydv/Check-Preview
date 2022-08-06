import Head from "next/head";
import Footer from "../components/globals/Footer";
import Header from "../components/globals/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Check Preview</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Footer />
    </>
  );
}
