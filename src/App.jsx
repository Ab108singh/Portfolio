import React, { createContext, useContext, useState } from "react";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import { ThemeContext } from "./component/ThemeContext";

const App = () => {
  let { state, changemod } = useContext(ThemeContext);

  const [current, setCurrent] = useState(<Home />);
  const [comp, setComp] = useState("home");

  const handleCurrent = (a, b) => {
    setComp(b);
    setCurrent(a);
  };

  return (
    <div
      className="h-[100vh]"
      style={{
        backgroundImage: state
          ? "url(https://img.freepik.com/premium-photo/old-black-background-grunge-texture-dark-wallpaper-blackboard-chalkboard-room-wall_959084-10.jpg?w=900)"
          : "url(https://img.freepik.com/free-vector/abstract-white-background_23-2148810889.jpg?w=996&t=st=1707769408~exp=1707770008~hmac=49494254aa960496bc2596deb60ba4cfeed9e175718394ccf1f666a081db2581)",
        backgroundSize: "cover",
        color: "white",
      }}
    >
      <div className="flex">
        <Navbar handleCurrent={handleCurrent} comp={comp} />
        {/* <div className="mt-[20px] mr-[20px] w">dark</div> */}
      </div>
      {current}
    </div>
  );
};

export default App;
