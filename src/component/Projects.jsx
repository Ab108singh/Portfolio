
import React, { createContext, useContext } from 'react'
import { ThemeContext } from './ThemeContext'
const Projects = () => {
  let {state,changemod} = useContext(ThemeContext)
  return (
    <div className='w-[100vw] flex justify-center items-center '>
       <div className='w-[96%] overflow-y-auto overflow-x-hidden  max-w-[900px] mt-[20px] text-base justify-center  flex gap-[14px] flex-wrap rounded-[20px]'>
        <div className={`border-[1px] text-xs px-[15px] ${!state?"border-black text-black":"border-white text-slate-400"} w-[90%] max-w-[350px] rounded-[15px] h-[200px]`}>
        <p className={`font-bold text-center p-2 text-[15px] ${state?"text-white":"text-black"} `}>A Real Time Chat App</p>
        <p>1. Created a realtime chat app using React and Firebase .</p>
        <p>2. Integrated Firebase Authentication for secure user login.</p>
        <p>3. Utilized Firebase Firestore to enable smooth realtime datasynchronization.</p>
        <p>4. Ensured usability across devices with responsive design.</p>
       
        </div>
        <div className={`border-[1px] text-xs px-[15px] ${!state?"border-black text-black":"border-white text-slate-400"} w-[90%] max-w-[350px] rounded-[15px] h-[200px]`}>
        <p className={`font-bold text-center p-2 text-[15px] ${state?"text-white":"text-black"} `}>Youtube clone</p>
        <p>1. Created a YouTube clone in ReactJS, mimicking key features like video playback and search.</p>
        <p>2. Ensured scalability and maintainability using React's component-based structure.</p>
        <p>3. Collaborated with a team to refine ideas and troubleshoot issues.</p>
        <p>4. Delivered a polished final product with a seamless user experience.</p>
       
        </div>
        <div className={`border-[1px] text-xs px-[15px] ${!state?"border-black text-black":"border-white text-slate-400"} w-[90%] max-w-[350px] rounded-[15px] h-[200px]`}>
         <p className={`font-bold text-center p-2 text-[15px] ${state?"text-white":"text-black"} `}>Weather App</p>
        <p>1. Created a weather application using React to provide real-time weather forecasts and data.</p>
<p>2. Integrated weather APIs to fetch and display current conditions, temperatures, and forecasts.</p>
<p>3. Designed an intuitive user interface with clear icons.</p>
<p>4. Collaborated with a team to ensure seamless functionality and user experience.</p>

       
        </div>
        <div className={`border-[1px] text-xs px-[15px] ${!state?"border-black text-black":"border-white text-slate-400"} w-[90%] max-w-[350px] rounded-[15px] h-[200px]`}>
         <p className={`font-bold text-center p-2 text-[15px] ${state?"text-white":"text-black"} `}>ToDo Application</p>
        <p>1. Built a ToDo app in ReactJS for easy task management.</p>
        <p>2. Integrated features like task creation, deletion, and completion.</p>
        <p>3. Designed an intuitive UI with clear task lists and controls.</p>
        <p>4. Collaborated with a team to refine features and enhance user experience.</p>
        
        </div>




         </div>
    </div>
  )
}

export default Projects
