import React from 'react'
import img1 from '../assets/img1.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faCompass, faLightbulb, faMessage, faMicrophone, faPaperPlane, faImages } from '@fortawesome/free-solid-svg-icons';

const Main = () => {
  return (
    <>
      <div className="min-h-[100vh] pb-[15vh] relative flex-1">
        <div className="flex items-center justify-between text-[22px] p-[20px] text-gray-500">
            <p>Gemini</p>
            <img  className='w-[85px] h-[85px] rounded-[50px]' src={img1} alt="gemin" />
        </div>
        <div className="max-w-[900px] m-auto">
            <div className="mt-[10px] mb-[10px] text-[50px] font-bold
            p-[12px] text-gray-300">
                <p><span className="bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent">Hello, Priyanshi</span></p>
                <p>How can I help you today?</p>
            </div>
            <div className="grid grid-cols-[repeat(auto-fill,_minmax(180px,_1fr))] gap-[15px] p-[20px]">
                <div className="h-[200px] p-[15px] bg-gray-200 rounded-[10px] relative cursor-pointer hover:bg-gray-300 shadow-slate-400">
                    <p>Suggest beautiful places to see on an upcoming road trip</p>
                    <FontAwesomeIcon icon={faCompass} className='size-6 p-[5px] bg-white rounded-[20px] absolute bottom-[10px] right-[10px] w-[35px] h-[32px]'></FontAwesomeIcon>
                </div>
                <div className="h-[200px] p-[15px] bg-gray-200 rounded-[10px] relative cursor-pointer hover:bg-gray-300 shadow-slate-400">
                    <p>Suggest beautiful places to see on an upcoming road trip</p>
                    <FontAwesomeIcon icon={faLightbulb} className='size-6 p-[5px] bg-white rounded-[20px] absolute bottom-[10px] right-[10px] w-[35px] h-[32px]'></FontAwesomeIcon>
                </div>
                <div className="h-[200px] p-[15px] bg-gray-200 rounded-[10px] relative cursor-pointer hover:bg-gray-300 shadow-slate-400">
                    <p>Suggest beautiful places to see on an upcoming road trip</p>
                    <FontAwesomeIcon icon={faMessage} className='size-6 p-[5px] bg-white rounded-[20px] absolute bottom-[10px] right-[10px] w-[35px] h-[32px]'></FontAwesomeIcon>
                </div>
                <div className="h-[200px] p-[15px] bg-gray-200 rounded-[10px] relative cursor-pointer hover:bg-gray-300 shadow-slate-400">
                    <p>Suggest beautiful places to see on an upcoming road trip</p>
                    <FontAwesomeIcon icon={faCode} className='size-6 p-[5px] bg-white rounded-[20px] absolute bottom-[10px] right-[10px] w-[35px] h-[32px]'></FontAwesomeIcon>
                </div>
            </div>
            {/* main bottom*/ }
            <div className="absolute bottom-0 max-w[900px] w-[905px] pl-[10px] pr-[10px] m-auto">
               <div className="flex items-center justify-between gap-[10px] bg-slate-300 p-[8px] rounded-[50px]">
                  <input className='border-none bg-transparent focus:outline-none text-[20px] p-[5px] text-black' type="text" placeholder="Enter a prompt here" />
                  <div className='flex items-center gap-[10px]'>
                    <FontAwesomeIcon  className= " size-[24px] cursor-pointer " icon={faImages}></FontAwesomeIcon>
                    <FontAwesomeIcon  className= " size-[24px] cursor-pointer " icon={faMicrophone}></FontAwesomeIcon>
                    <FontAwesomeIcon  className= " size-[24px] cursor-pointer " icon={faPaperPlane}></FontAwesomeIcon>
                  </div>
                </div>
                <p className='text-[13px] mt-[7px] mb-[7px] text-center font-normal '>
                   Gemini may display inaccurate info, including about people, so double-check its
                </p>
            </div>
        </div>
      </div>
    </>
  )
}

export default Main
