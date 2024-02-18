import React, { createContext, useContext, useState } from "react";
import { ThemeContext } from "./ThemeContext";

const Contact = () => {
  let { state, changemod } = useContext(ThemeContext);
  const[name,setName]=useState("")
  const[phone,setPhone]=useState("")
  const[eadd,setEadd]=useState("")
  const[add,setAdd]=useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setPhone("");
    setEadd("");
    setAdd("");
  };

  return (
    <div className="flex flex-col gap-[30px] p-[0px] items-center w-[100%] h-[87vh] justify-center">
      <div className="flex flex-col gap-[20px]  w-[90%] max-w-[800px]  min-h-[90%] px-[30px] py-[10px] border-slate-500 border-[0.2px] rounded-[20px]">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className="flex flex-col items-center gap-[20px]"
          action="submit"
        >
          <label
            className={`text-center ${
              !state ? "text-black font-bold" : "text-white"
            } `}
            htmlFor="Name"
          >
            Name
          </label>
          <input
            className={`rounded-[8px] w-[90%] h-[44px]   px-[18px] bg-transparent  border-[1px] ${
              !state
                ? "border-slate-400 text-black "
                : "text-white border-slate-300"
            } `}
            placeholder="Enter your name here"
            type="text"
            value={name}
            onChange={(e)=>{setName(e.target.value)}}
          />
          <div
            className={`w-[99%] h-[1px] ${state ? "bg-white" : "bg-slate-500"}`}
          ></div>

          <label
            className={`text-center ${
              !state ? "text-black font-bold" : "text-white"
            } `}
            htmlFor="Name"
          >
            Phone Number
          </label>
          <input
            className={`rounded-[8px] w-[90%] h-[44px]   px-[18px] bg-transparent  border-[1px] ${
              !state
                ? "border-slate-400 text-black "
                : "text-white border-slate-300"
            } `}
            placeholder="Enter your Phone Number here"
            type="text"
            value={phone}
            onChange={(e)=>{setPhone(e.target.value)}}
          />
          <div
            className={`w-[99%] h-[1px] ${state ? "bg-white" : "bg-slate-500"}`}
          ></div>

          <label
            className={`text-center ${
              !state ? "text-black font-bold" : "text-white"
            } `}
            htmlFor="Name"
          >
            Email Address
          </label>
          <input
            className={`rounded-[8px] w-[90%] h-[44px]   px-[18px] bg-transparent  border-[1px] ${
              !state
                ? "border-slate-400 text-black "
                : "text-white border-slate-300"
            } `}
            placeholder="Enter your Email Address here"
            type="text"
            value={eadd}
            onChange={(e)=>{setEadd(e.target.value)}}
          />
          <div
            className={`w-[99%] h-[1px] ${state ? "bg-white" : "bg-slate-500"}`}
          ></div>

          <label
            className={`text-center ${
              !state ? "text-black font-bold" : "text-white"
            } `}
            htmlFor="Name"
          >
            Address
          </label>
          <input
            className={`rounded-[8px] w-[90%] h-[44px]   px-[18px] bg-transparent  border-[1px] ${
              !state
                ? "border-slate-400 text-black "
                : "text-white border-slate-300"
            } `}
            placeholder="Enter your Address here"
            type="text"
            value={add}
            onChange={(e)=>{setAdd(e.target.value)}}
          />
          <div
            className={`w-[99%] h-[1px] ${state ? "bg-white" : "bg-slate-500"}`}
          ></div>

          <button
            className={`w-[200px] h-[40px] ${
              state ? "bg-white text-black" : "bg-black text-white"
            } rounded-[12px] font-bold text-[20px]`}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
