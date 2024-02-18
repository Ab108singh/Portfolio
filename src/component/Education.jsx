import React, { createContext, useCallback, useContext } from "react";
import { ThemeContext } from "./ThemeContext";
const Education = () => {
  let { state, changemod } = useContext(ThemeContext);
  return (
    <div className="flex flex-col  gap-[30px] p-[20px]   items-center w-[100%] justify-center">
      <div className="w-[100%] flex flex-col items-center">
        <div
          className={`text-center pt-[20px] text-[20px] font-bold ${
            state ? "text-white" : "text-black"
          } `}
        >
          Bachelor of Engineering
        </div>
        <div className="w-[70%] h-[120px] max-w-[600px] flex items-center gap-[40px] ">
          <div>
            <img
              className="w-[40px] bg-white rounded-full"
              src="https://cdn3.iconfinder.com/data/icons/smart-city-6/100/smart-city-solid2-09-512.png"
              alt=""
            />
          </div>
          <div
            className={`text-xs h-[70px] ${
              state ? "text-slate-400" : "text-slate-800"
            }`}
          >
             <p>College - Panjab University SSGRC Hoshiarpur</p>
            <p>Field - Information Technology</p>
            <p>GPA - 8.02</p>
          </div>
        </div>
        <div
          className={`w-[80%] max-w-[700px] mt-4 h-[1px] ${
            state ? "bg-white" : "bg-black"
          }`}
        >
          {" "}
        </div>
        <div
          className={`text-center pt-[20px] text-[20px] font-bold ${
            state ? "text-white" : "text-black"
          } `}
        >
          12th
        </div>
        <div className="w-[70%] h-[120px] max-w-[600px] flex items-center gap-[40px] ">
          <div>
            <img
              className="w-[40px] bg-white rounded-full"
              src="https://cdn3.iconfinder.com/data/icons/smart-city-6/100/smart-city-solid2-09-512.png"
              alt=""
            />
          </div>
          <div
            className={`text-xs h-[70px] ${
              state ? "text-slate-400" : "text-slate-800"
            }`}
          >
           <p>School - Kisan Intermediate College Rajgarh Mirzapur UP</p>
           <p>Grade - 80%</p>
          </div>
        </div>
        <div
          className={`w-[80%] max-w-[700px] h-[1px] ${
            state ? "bg-white" : "bg-black"
          }`}
        >
          {" "}
        </div>
        <div
          className={`text-center pt-[20px] text-[20px] font-bold ${
            state ? "text-white" : "text-black"
          } `}
        >
          10th
        </div>
        <div className="w-[70%] h-[120px] max-w-[600px] flex items-center gap-[40px] ">
          <div>
            <img
              className="w-[40px] bg-white rounded-full"
              src="https://cdn3.iconfinder.com/data/icons/smart-city-6/100/smart-city-solid2-09-512.png"
              alt=""
            />
          </div>
          <div
            className={`text-xs h-[70px] ${
              state ? "text-slate-400" : "text-slate-800"
            }`}
          >
           <p>School - Kisan Intermediate College Rajgarh Mirzapur UP</p>
           <p>Grade - 80%</p>
          </div>
        </div>
        <div
          className={`w-[80%] max-w-[700px] h-[1px] ${
            state ? "bg-white" : "bg-black"
          }`}
        >
          {" "}
        </div>
      </div>
    </div>
  );
};

export default Education;
