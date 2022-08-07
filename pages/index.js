import { ArrowRightIcon, SearchIcon } from "@heroicons/react/outline";
import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import Footer from "../components/globals/Footer";
import Header from "../components/globals/Header";
export default function Home() {
  const [website, setWebsite] = useState(null);
  const [data, setData] = useState(null);
  function handleWebDataRequest(e) {
    e.preventDefault();
    let url = "api/fetchWebsiteData/?website=" + website;
    axios.get(url).then((response) => setData(response.data.data));
    console.log(website);
  }
  return (
    <>
      <Head>
        <title>Check Preview</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="flex flex-col md:flex-row p-4 my-4">
        <div className="w-full md:w-[60%] py-4">
          {!data && (
            <div className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-emerald-600 dark:text-emerald-400 text-center md:text-left">
              Check URL card
            </div>
          )}

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
          {data && (
            <div class="max-w-sm lg:max-w-md xl:max-w-lg my-4 mx-auto md:mx-0 rounded overflow-hidden shadow-lg">
              <img
                class="w-full"
                src={data.image}
                alt="Sunset in the mountains"
              />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{data.title}</div>
                <p class="text-gray-700 text-base">{data.description}</p>
              </div>

              <a
                href={data.url}
                className="transition-all my-4 mx-2 p-2 text-lg block text-center bg-emerald-400 rounded-full text-slate-50 group hover:bg-emerald-500"
              >
                Visit {data.title}{" "}
                <ArrowRightIcon className="transition-all h-7 stroke-[1.2] inline-block group-hover:relative group-hover:-right-2" />
              </a>
            </div>
          )}
        </div>
        <div className="w-full md:w-[40%]"></div>
      </div>
      <Footer />
    </>
  );
}
