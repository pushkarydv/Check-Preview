import React, { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/outline";
import Link from "next/link";
export default function Header() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    // getting if there any mode set by user
    if (localStorage.getItem("CheckPreview_dark_lover") === "dark") {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);
  function changeTheme() {
    if (dark) {
      document.documentElement.classList.remove("dark");
      setDark(false);
      localStorage.setItem("CheckPreview_dark_lover", "light");
    } else {
      document.documentElement.classList.add("dark");
      setDark(true);
      localStorage.setItem("CheckPreview_dark_lover", "dark");
    }
  }

  return (
    <div className="flex flex-row text-3xl font-bold items-center justify-between p-2 md:p-4 lg:p-6">
      <Link href={"/"} className="no-underline flex flex-row items-center">
        <a className="no-underline flex flex-row items-center">
          {/* <img src="/logo.png" className="h-10 mr-2" alt="" /> */}Check
          Preview
        </a>
      </Link>{" "}
      <button onClick={changeTheme} className="transition active:scale-90">
        {/* show svg after checking if page is dark or light  */}
        {dark ? (
          <SunIcon className="h-8 stroke-[1.5]" />
        ) : (
          <MoonIcon className="h-8 stroke-[1.5]" />
        )}
      </button>
    </div>
  );
}
