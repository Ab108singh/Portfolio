
import React, { createContext, useContext } from 'react'
import { ThemeContext } from './ThemeContext'
const About = () => {
  let {state,changemod} = useContext(ThemeContext)
  return (
    <div className='flex flex-col gap-[30px] p-[0px] items-center w-[100%] h-[90vh] justify-center'>
     <div className={`flex flex-col gap-[20px]  w-[90%] max-w-[800px]  min-h-[90%] px-[30px] py-[10px] ${state?"border-white":"border-black"} border-[2px] rounded-[20px]`} >
       
       <div className={`w-[100%] h-[45%] flex flex-col gap-[9px] pl-[px] text-[12px] ${state?"text-slate-400":"text-black"} `}> 
    <p><span className={`${state?"text-white":"text-black font-bold"}`}>-&gt; Name</span> - Abhay</p>
     <p><span className={`${state?"text-white":"text-black font-bold"}`}>-&gt; Fathers Name</span> - Hemant Kumar Singh</p>
     <p><span className={`${state?"text-white":"text-black font-bold"}`}>-&gt; Mothers Name</span> - Sangita Devi </p>
     <p><span className={`${state?"text-white":"text-black font-bold"}`}>-&gt; Phone</span> -  6387324537, 8303229510</p>
     <p><span className={`${state?"text-white":"text-black font-bold"}`}>-&gt; Email Address</span> - abhaysingh24071@gmail.com </p>
     <p><span className={`${state?"text-white":"text-black font-bold"}`}>-&gt; Date of Birth</span> - 24/07/2001 </p>
     <p><span className={`${state?"text-white":"text-black font-bold"}`}>-&gt; Current Address</span> - 433, Phase 2, Sector 54, Sahibzada Ajit Singh Nagar, Chandigarh 160059</p>
     <p><span className={`${state?"text-white":"text-black font-bold"}`}>-&gt; Permanent Address</span> - Garhava Rajgarh Mirzapur Uttar Pradesh (231210) </p>
     <div className={`w-[100%] h-[1px] ${state?"bg-white":"bg-black border-black"} border mt-[40px]`}></div>
    
       </div>
        







       <div className='w-[100%] h-[50%] flex flex-wrap gap-[4px] justify-center'>
        <div className={`w-[100%] h-[10%] text-center ${!state&&"text-black"}`}>------- Skils -------</div>
         <div className={`w-[48%] h-[90%] text-[12px] ${state?"text-slate-400":"text-black"} flex flex-col gap-[5px] `}>
          <p className={`text-center text-[15px] ${state?"text-white":"text-black font-bold"}`}>Coursework Skills</p>
          <p className='text-center'>Operating System</p>
          <p className='text-center'>Database Management System</p>
          <p className='text-center'>Computer Network</p>
          <p className='text-center'>Object Oriendted Programming</p>
          <p className='text-center'>SQL</p>
          <p className='text-center'>.....</p>
          <p className='text-center'> </p>
          <p className='text-center'> </p>
         </div>
         <div className={`w-[48%] h-[90%] text-[12px] ${state?"text-slate-400":"text-black"} flex flex-col gap-[5px] `}>

         <p className={`text-center text-[15px] ${state?"text-white":"text-black font-bold"}`}>Technical Skills</p>
         <p className='text-center'>C++</p>
         <p className='text-center'>Data Structure and Algorithm</p>
         <p className='text-center'>Problem Solving</p>
         <p className='text-center'>Html</p>
         <p className='text-center'>CSS</p>
         <p className='text-center'>Javascript</p>
         <p className='text-center'>React</p>
         <p className='text-center'>Node</p>
         <p className='text-center'>MongoDB</p>
         <p className='text-center'>.....</p>
         </div>
         
         
         </div>



     </div>
      </div>
  )
}

export default About
