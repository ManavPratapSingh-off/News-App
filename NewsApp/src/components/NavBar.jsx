import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

function NavBar() {
  const activeRef = useRef(null);

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <nav
        className="
    nav-bar
    bg-[var(--nav-bg)] shadow-md px-6 py-4 flex items-center justify-between"
      >
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-[var(--logo)]">NEWS APP</h1>
          <div
            className="w-[1.8rem] h-[1.8rem] ml-3.5 rounded-lg flex justify-center items-center cursor-pointer hover:bg-[var(--hover)]"
            onClick={() => {
              setTheme(theme === "light" ? "dark" : "light");
            }}
          >
            <i
              className={
                theme == "light" ? "fa-solid fa-sun" : "fa-solid fa-moon"
              }
            ></i>
          </div>
        </div>
        <div className="links flex w-[] ">
          <Link
            className="text-[var(--link)] hover:text-[var(--button-hover)] font-medium transition-colors duration-200"
            style={{
              gridColumn: "2 / 3",
            }}
            onClick={(e) => {
              activeRef.current
                ? activeRef.current.classList.remove("active-link")
                : (activeRef.current = null);
              e.target.classList.add("active-link");
              activeRef.current = e.target;
            }}
            to={"/"}
            id="home-link"
          >
            Home
          </Link>
          <Link
            className="text-[var(--link)] hover:text-[var(--button-hover)] font-medium transition-colors duration-200"
            style={{
              gridColumn: "3 / 4",
            }}
            to={"/sports"}
            onClick={(e) => {
              activeRef.current
                ? activeRef.current.classList.remove("active-link")
                : (activeRef.current = null);
              e.target.classList.add("active-link");
              activeRef.current = e.target;
            }}
          >
            Sports
          </Link>
          <Link
            className="text-[var(--link)] hover:text-[var(--button-hover)] font-medium transition-colors duration-200"
            to={"/business"}
            onClick={(e) => {
              activeRef.current
                ? activeRef.current.classList.remove("active-link")
                : (activeRef.current = null);
              e.target.classList.add("active-link");
              activeRef.current = e.target;
            }}
          >
            Business
          </Link>
        </div>
        <SearchBar />
      </nav>
    </>
  );
}

export default NavBar;
