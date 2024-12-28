import React,{useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars, faGears, faHistory, faMessage, faPlus, faQuestionCircle} from '@fortawesome/free-solid-svg-icons'

function Sidebar(){
  const[extend,setExtend]=useState(false)
  return (
    <>
      <div className="h-screen overflow-auto md:min-h-[100vh] inline-flex p-[10px] flex-col justify-between bg-slate-200">
        <div className="top">
            <FontAwesomeIcon onClick={()=>setExtend(prev=>!prev)} icon={faBars} className=' size-5 ml-[10px] mt-2 cursor-pointer block '></FontAwesomeIcon>
            <div className="inline-flex mt-[40px] cursor-pointer gap-[8px] items-center justify-between bg-slate-500 rounded-[50px] p-[10px]">
            <FontAwesomeIcon icon={faPlus} className=' size-4 '></FontAwesomeIcon>
                {extend?<p className=' text-sm'>New Chat</p>:null}
            </div>
            {extend?<div className="flex flex-col ">
                <p className='mt-[30px] mb-[20px] text-lg font-bold'>Recent</p>
                <div className="flex items-center gap-[10px] pr-[40px] rounded-[50px] cursor-pointer ">
                <FontAwesomeIcon icon={faMessage} className=' size-3  '></FontAwesomeIcon>
                    <p>what is react</p>
                </div>
            </div>:null}
        </div>
        <div className="mb-5">
            <div className="flex items-center gap-[10px] cursor-pointer mt-[10px] font-medium font-sans">
            <FontAwesomeIcon icon={faQuestionCircle} className=' size-4  '></FontAwesomeIcon>
                {extend?<p>Help</p>:null}
            </div>
            <div className="flex items-center gap-[10px] cursor-pointer  mt-[10px] font-medium font-sans">
            <FontAwesomeIcon icon={faHistory} className=' size-4  '></FontAwesomeIcon>
                {extend?<p>Activity</p>:null}
            </div>
            <div className="flex items-center gap-[10px] cursor-pointer  mt-[10px] font-medium font-sans">
            <FontAwesomeIcon icon={faGears} className=' size-4  '></FontAwesomeIcon>
                {extend?<p>Settings</p>:null}
            </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar ;
