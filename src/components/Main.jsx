import React from 'react';
import img1 from '../assets/img1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass, faLightbulb, faMessage, faCode, faImages, faMicrophone, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Main = () => {
  return (
    <>
      <div className="min-h-[102vh]  md:min-h-[100vh] pb-[12vh]  relative flex-1">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between text-[18px] md:text-[22px] p-[15px] md:p-[20px] text-gray-500">
          <p>Gemini</p>
          <img className="w-[60px] h-[60px] md:w-[85px] md:h-[85px] rounded-[50px]" src={img1} alt="gemini" />
        </div>

        {/* Main Content */}
        <div className="w-full   md:max-w-[900px] mx-auto px-4 md:px-0">
          {/* Heading Section */}
          <div className="mt-[10px] mb-[10px] text-[30px] md:text-[50px] font-bold text-gray-300 p-[12px] md:text-start text-center">
            <p>
              <span className="bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent">
                Hello, Priyanshi
              </span>
            </p>
            <p>How can I help you today?</p>
          </div>

          {/* Grid Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[15px] p-[10px]">
            <div className="h-[150px] md:h-[200px] p-[15px] bg-gray-200 rounded-[10px] relative cursor-pointer hover:bg-gray-300 shadow-slate-400">
              <p className="text-sm md:text-base">
                Suggest beautiful places to see on an upcoming road trip
              </p>
              <FontAwesomeIcon
                icon={faCompass}
                className="p-[5px] bg-white rounded-[20px] absolute bottom-[10px] right-[10px] w-[30px] h-[30px] md:w-[35px] md:h-[35px]"
              />
            </div>
            <div className="h-[150px] md:h-[200px] p-[15px] bg-gray-200 rounded-[10px] relative cursor-pointer hover:bg-gray-300 shadow-slate-400">
              <p className="text-sm md:text-base">
                Suggest beautiful places to see on an upcoming road trip
              </p>
              <FontAwesomeIcon
                icon={faLightbulb}
                className="p-[5px] bg-white rounded-[20px] absolute bottom-[10px] right-[10px] w-[30px] h-[30px] md:w-[35px] md:h-[35px]"
              />
            </div>
            <div className="h-[150px] md:h-[200px] p-[15px] bg-gray-200 rounded-[10px] relative cursor-pointer hover:bg-gray-300 shadow-slate-400">
              <p className="text-sm md:text-base">
                Suggest beautiful places to see on an upcoming road trip
              </p>
              <FontAwesomeIcon
                icon={faMessage}
                className="p-[5px] bg-white rounded-[20px] absolute bottom-[10px] right-[10px] w-[30px] h-[30px] md:w-[35px] md:h-[35px]"
              />
            </div>
            <div className="h-[150px] md:h-[200px] p-[15px] bg-gray-200 rounded-[10px] relative cursor-pointer hover:bg-gray-300 shadow-slate-400">
              <p className="text-sm md:text-base">
                Suggest beautiful places to see on an upcoming road trip
              </p>
              <FontAwesomeIcon
                icon={faCode}
                className="p-[5px] bg-white rounded-[20px] absolute bottom-[10px] right-[10px] w-[30px] h-[30px] md:w-[35px] md:h-[35px]"
              />
            </div>
          </div>

          {/* Bottom Input Section */}
          <div className="absolute bottom-0  w-auto md:w-full max-w-[700px] md:max-w-[900px] px-3 md:px-4 mx-auto">
            <div className="flex items-center justify-between gap-[5px] md:gap-[10px] bg-slate-300 p-[8px] rounded-[50px]">
              <input
                className="flex-1 border-none bg-transparent focus:outline-none text-[14px] md:text-[20px] p-[2px] md:p-[2px] text-black"
                type="text"
                placeholder="Enter a prompt here"
              />
              <div className="flex items-center gap-[7px] md:gap-[10px] lg:gap-[10px]">
                <FontAwesomeIcon
                  className="cursor-pointer w-[18px] h-[18px] md:w-[24px] md:h-[24px]"
                  icon={faImages}
                />
                <FontAwesomeIcon
                  className="cursor-pointer w-[18px] h-[18px] md:w-[24px] md:h-[24px]"
                  icon={faMicrophone}
                />
                <FontAwesomeIcon
                  className="cursor-pointer w-[18px] h-[18px] md:w-[24px] md:h-[24px]"
                  icon={faPaperPlane}
                />
              </div>
            </div>
            <p className="text-[11px] md:text-[13px] mt-[7px] mb-[7px] text-center font-normal text-gray-500">
              Gemini may display inaccurate info, including about people, so double-check its
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;

