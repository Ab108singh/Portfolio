
import React, { createContext, useContext } from 'react'
import { ThemeContext } from './ThemeContext'
const Home = () => {
  let {state,changemod} = useContext(ThemeContext);
  console.log(state);
  return (
   <div className='flex w-[100vw] justify-center'>
     <div className={`flex flex-col justify-center items-center border-2  w-[90vw] py-[30px] px-[20px] rounded-[20px] max-w-[800px] ${!state?"border-slate-400":"border-white"  }  `}>
     
     <div className={`flex justify-center items-center flex-col gap-[0px]  `}>
       <p className={`text-[120px] ${!state&&"text-black font-bold "}`}>I'm Abhay</p>
       <p className={`text-center max-w-[800px] ${state?"text-slate-400":"text-slate-900"}`}>
       I love making websites look awesome and run smoothly. Whether it's crafting cool designs or fixing tricky tech issues, I'm all in. I enjoy teaming up with others to brainstorm new ideas and make stuff even better. Let's build something awesome together!
       </p>
       <p>.</p>
       <p></p>
     </div>
     <div className="flex gap-[20px] justify-center mt-[20px] ">
       <a href="https://www.instagram.com/abhaysingh.108/"><img className="w-[40px] border-white border-[2px] bg-white rounded-full" src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Instagram_svg-512.png" alt="" /></a>
       <a href="https://www.linkedin.com/in/abhay-singh-71a8332a2/"><img className="w-[40px] border-white border-[2px] bg-white rounded-full" src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Linkedin_svg-512.png" alt="" /></a>
       <a href="https://github.com/Ab108singh"><img className="w-[40px] border-white border-[2px] bg-white rounded-full" src="https://cdn4.iconfinder.com/data/icons/social-media-free-13/32/Github_social_media_logo-512.png" alt="" /></a>
        <a href="https://twitter.com/Abs07330972"><img className="w-[40px] border-white border-[2px] bg-white rounded-full" src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Twitter_svg-512.png" alt="" /></a>
        <a href="https://www.facebook.com/ab108singh/"><img className="w-[40px] border-white border-[2px] bg-white rounded-full" src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Facebook_svg-512.png" alt="" /></a>
     </div>
     <a href="https://drive.google.com/file/d/1ZlUSptaNfp68Jo4p1urlJUYT7saPu55B/view?usp=sharing" className={`w-[300px] h-[50px] rounded-[30px] mt-[30px] flex justify-center items-center text-[20px] font-bold ${state?"bg-white text-black":"bg-black text-white"} `}>DOWNLOAD RESUME</a>
    
   </div>
   </div>
  );
};

export default Home;
