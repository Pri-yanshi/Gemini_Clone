import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars, faGears, faHistory, faMessage, faPlus, faQuestionCircle} from '@fortawesome/free-solid-svg-icons'

function Sidebar(){
  return (
    <>
      <div className="min-h-[100vh] inline-flex p-[10px] flex-col justify-between bg-slate-200">
        <div className="top">
            <FontAwesomeIcon icon={faBars} className=' size-5 ml-[10px] mt-2 cursor-pointer block '></FontAwesomeIcon>
            <div className="inline-flex mt-[20px] cursor-pointer gap-[8px] items-center justify-between bg-slate-500 rounded-[50px] p-[10px]">
            <FontAwesomeIcon icon={faPlus} className=' size-4 '></FontAwesomeIcon>
                <p className=' text-sm'>New Chat</p>
            </div>
            <div className="flex flex-col ">
                <p className='mt-[30px] mb-[20px] text-lg font-bold'>Recent</p>
                <div className="flex items-center gap-[10px] pr-[40px] rounded-[50px] cursor-pointer ">
                <FontAwesomeIcon icon={faMessage} className=' size-3  '></FontAwesomeIcon>
                    <p>what is react</p>
                </div>
            </div>
        </div>
        <div className="b">
            <div className="flex items-center gap-[10px] cursor-pointer mt-[10px] font-medium font-sans">
            <FontAwesomeIcon icon={faQuestionCircle} className=' size-4  '></FontAwesomeIcon>
                <p>Help</p>
            </div>
            <div className="flex items-center gap-[10px] cursor-pointer  mt-[10px] font-medium font-sans">
            <FontAwesomeIcon icon={faHistory} className=' size-4  '></FontAwesomeIcon>
                <p>Activity</p>
            </div>
            <div className="flex items-center gap-[10px] cursor-pointer  mt-[10px] font-medium font-sans">
            <FontAwesomeIcon icon={faGears} className=' size-4  '></FontAwesomeIcon>
                <p>Settings</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar ;
