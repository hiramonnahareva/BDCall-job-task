import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";


const Questions = (data) => {
    const {title, details} = data.data;

    const [hide, setHide] = useState(false)

    return (
        <div className="lg:w-[100%] w-[80vw]">
            <div className="m-[20px] flex justify-between mb-4 bg-[#FFFFF5] cursor-pointer p-[20px]" onClick={() => setHide(!hide)}>
                <h2 className="text-[20px] font-semibold text-[#020043]">{title}</h2>
                
                <div className="flex flex-col gap-2 relative top-2 -z-10">
                    <div className={`line ${!hide && 'absolute top-0 rotate-90' }`}></div>
                    <div className={`line ${hide && 'absolute top-1 hidden' }`}></div>
                </div>
                <p>{!hide ? <MdKeyboardArrowDown /> :  <MdKeyboardArrowUp />}</p>
            </div>

            {
                hide ? <p className="px-[20px] py-[10px] text-[#343268] text-[14px] transition-all duration-700">{details}</p> :
                <p className="px-[20px] py-0 transition-all text-[#343268] text-[14px] duration-700"></p>
            }
            
        </div>
    );
};

export default Questions;