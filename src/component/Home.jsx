import React, { createContext, useContext } from 'react'
import { ThemeContext } from './ThemeContext'

const Home = () => {
  const { state, changemod } = useContext(ThemeContext);

  return (
    <div className='flex justify-center w-[100vw]'>
      <div className={`flex flex-col gap-[20px] justify-center  items-center border-2 w-[90%] max-w-[800px] py-8 px-4 rounded-xl ${!state ? "border-slate-400" : "border-white"}`}>
        <div className="flex flex-col gap-4">
          <p className={`text-8xl font-bold text-center ${!state && "text-black font-bold"}`}>I'm Abhay</p>
          <p className={`text-center max-w-xl ${state ? "text-slate-400" : "text-slate-900"}`}>
            I love making websites look awesome and run smoothly. Whether it's crafting cool designs or fixing tricky tech issues, I'm all in. I enjoy teaming up with others to brainstorm new ideas and make stuff even better. Let's build something awesome together!
          </p>
        </div>
        <div className="flex justify-center gap-4 mt-4">
          <SocialLink href="https://www.instagram.com/abhaysingh.108/" iconSrc="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Instagram_svg-512.png" />
          <SocialLink href="https://www.linkedin.com/in/abhay-singh-71a8332a2/" iconSrc="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Linkedin_svg-512.png" />
          <SocialLink href="https://github.com/Ab108singh" iconSrc="https://cdn4.iconfinder.com/data/icons/social-media-free-13/32/Github_social_media_logo-512.png" />
          <SocialLink href="https://twitter.com/Abs07330972" iconSrc="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Twitter_svg-512.png" />
          <SocialLink href="https://www.facebook.com/ab108singh/" iconSrc="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Facebook_svg-512.png" />
        </div>
        <a href="https://drive.google.com/file/d/1ZlUSptaNfp68Jo4p1urlJUYT7saPu55B/view?usp=sharing" className={` px-[30px]  h-[50px] rounded-[30px] mt-4 flex justify-center items-center text-xl font-bold ${state ? "bg-white text-black" : "bg-black text-white"}`}>DOWNLOAD RESUME</a>
      </div>
    </div>
  );
};

const SocialLink = ({ href, iconSrc }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <img className="w-10 h-10 border-white border-2 bg-white rounded-full" src={iconSrc} alt="" />
  </a>
);

export default Home;
