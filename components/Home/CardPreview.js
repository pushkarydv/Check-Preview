import { ArrowRightIcon } from "@heroicons/react/outline";
import React from "react";

export default function CardPreview({ data }) {
  return (
    <div className="max-w-sm lg:max-w-md xl:max-w-lg my-4 mx-auto md:mx-0 rounded overflow-hidden shadow-lg">
      <img className="w-full" src={data.image} alt="Sunset in the mountains" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{data.title}</div>
        <p className=" text-base">{data.description}</p>
      </div>

      <a
        href={data.url}
        className="transition-all my-4 mx-2 p-2 text-lg block text-center bg-emerald-400 rounded-full text-slate-50 group hover:bg-emerald-500 "
        target="_blank"
        rel="noreferrer noopener"
      >
        Visit {data.title}{" "}
        <ArrowRightIcon className="transition-all h-7 stroke-[1.2] inline-block group-hover:relative group-hover:-right-2" />
      </a>
    </div>
  );
}
