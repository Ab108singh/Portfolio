import Home from "./Home";
import About from "./About";
import Education from "./Education";
import Projects from "./Projects";
import Contact from "./Contact";
import React, { createContext, useContext } from "react";
import { ThemeContext } from "./ThemeContext";
const Navbar = ({ handleCurrent, comp }) => {
  let { state, changemod } = useContext(ThemeContext);
  console.log("comp -" + comp);

  return (
    <nav className="w-[100%] h-[60px]  flex justify-center items-center">
      <ul
        className={`flex w-[70%]  justify-around text-lg ${
          state ? "text-white" : "text-black font-bold"
        } max-w-[700px]`}
      >
        <li
          className={`px-[8px] py-[2px] rounded-[10px] ${
            comp == "home" &&
            (state ? "bg-white text-black font-bold" : "bg-black text-white")
          }`}
          onClick={() => handleCurrent(<Home state={state} />, "home")}
        >
          <button>Home</button>
        </li>
        <li
          className={`px-[8px] py-[2px] rounded-[10px] ${
            comp == "about" &&
            (state ? "bg-white text-black font-bold" : "bg-black text-white")
          }`}
          onClick={() => handleCurrent(<About state={state} />, "about")}
        >
          <button>About</button>
        </li>
        <li
          className={`px-[8px] py-[2px] rounded-[10px] ${
            comp == "education" &&
            (state ? "bg-white text-black font-bold" : "bg-black text-white")
          }`}
          onClick={() =>
            handleCurrent(<Education state={state} />, "education")
          }
        >
          <button>Education</button>
        </li>
        <li
          className={`px-[8px] py-[2px] rounded-[10px] ${
            comp == "projects" &&
            (state ? "bg-white text-black font-bold" : "bg-black text-white")
          }`}
          onClick={() => handleCurrent(<Projects state={state} />, "projects")}
        >
          <button>Projects</button>
        </li>
        <li
          className={`px-[8px] py-[2px] rounded-[10px] ${
            comp == "contact" &&
            (state ? "bg-white text-black font-bold" : "bg-black text-white")
          }`}
          onClick={() => handleCurrent(<Contact state={state} />, "contact")}
        >
          <button>contacts</button>
        </li>
      </ul>
      <div
        onClick={changemod}
        className={`w-[30px] h-[30px] ${
          state ? "border-2" : "border-slate-600 border-2"
        } rounded-full`}


        style={{
          backgroundImage: !state
            ? "url(https://cdn4.iconfinder.com/data/icons/remixicon-weather/24/moon-fill-512.png)"
            : "url(https://cdn0.iconfinder.com/data/icons/energy-linear-white-with-black-background/2048/Sun_II-512.png)",
          backgroundSize: "cover",
          color: "white",
        }}
      ></div>
    </nav>
  );
};

export default Navbar;
