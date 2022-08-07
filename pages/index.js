import { SearchIcon } from "@heroicons/react/outline";
import axios from "axios";
import Head from "next/head";
import { useState } from "react";
import Footer from "../components/globals/Footer";
import Header from "../components/globals/Header";
import CardPreview from "../components/Home/CardPreview";
import Hero from "../components/Home/Hero";
export default function Home() {
  const [website, setWebsite] = useState("");
  const [data, setData] = useState(null);
  function handleWebDataRequest(e) {
    e.preventDefault();
    setData(null);
    let url = `http://api.linkpreview.net/?key=${process.env.NEXT_PUBLIC_LINK_API_KEY}&q=${website}`;
    axios
      .get(url)
      .then((response) => setData(response.data))
      .catch((err) => alert("Sorry Somethuing Went Wrong. Check URL once"));
    console.log(website);
  }
  return (
    <>
      <Head>
        <title>Check Preview</title>
        <meta name="title" content="Card Preview" />{" "}
        <meta
          name="description"
          content="A Small website to check how Cards of your website looks when it get's shared via email or any social media"
        />{" "}
        <meta
          name="keywords"
          content="card, metadata, mets, tags, banner, web cards, Check Preview"
        />{" "}
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />{" "}
        <meta name="language" content="English" />{" "}
        <meta name="author" content="Pushkar Yadav" />{" "}
        <meta property="og:type" content="website" />{" "}
        <meta property="og:url" content="https://checkpreview.vercel.app" />{" "}
        <meta property="og:title" content="Card Preview" />{" "}
        <meta
          property="og:description"
          content="A Small website to check how Cards of your website looks when it get's shared via email or any social media"
        />{" "}
        <meta
          property="og:image"
          content="https://checkpreview.vercel.app/banner.png"
        />{" "}
        <meta property="twitter:card" content="summary_large_image" />{" "}
        <meta
          property="twitter:url"
          content="https://checkpreview.vercel.app"
        />{" "}
        <meta property="twitter:title" content="Card Preview" />{" "}
        <meta
          property="twitter:description"
          content="A Small website to check how Cards of your website looks when it get's shared via email or any social media"
        />
        <meta
          property="twitter:image"
          content="https://checkpreview.vercel.app/banner.png"
        />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Header />
      <div className="flex flex-col md:flex-row p-4 my-4">
        <div className="w-full md:w-[60%] py-4">
          {!data && <Hero />}

          <form
            onSubmit={handleWebDataRequest}
            className="transition-all w-full mx-auto sm:w-[60%] md:mx-0  text-xl relative my-8"
          >
            <input
              type="url"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              id="urlBox"
              autoFocus={true}
              autoComplete="off"
              className="transition-all bg-white dark:bg-slate-900 shadow-lg shadow-slate-200 dark:shadow-slate-800/20 outline-none  rounded-xl text-xl focus:scale-[103%]  p-4 w-full ring-4 ring-emerald-300 focus:ring-emerald-500"
              placeholder="https://example.com"
              required={true}
            />
            <button
              type="submit "
              className="absolute right-1 top-1 w-14 h-14 z-10 bg-white dark:bg-slate-900 rounded-full"
            >
              <SearchIcon className="w-full stroke-slate-600 dark:stroke-slate-300 stroke-[1]" />
            </button>
          </form>
          {data && <CardPreview data={data} />}
        </div>
        <div className="w-full md:w-[40%]">
          <img
            src="/search.png"
            className="w-[90%] my-2 mx-auto md:w-full p-4"
            alt=""
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
