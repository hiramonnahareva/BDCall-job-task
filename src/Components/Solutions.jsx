import { FiArrowUpRight } from "react-icons/fi";
import misson from "../assets/misson.png"


const Solutions = () => {
    return (
        <div className="lg:flex lg:m-40 m-[20px] gap-40 items-center">
            <div className="lg:flex-1">
            <button className='px-[28px] py-[8px] mt-[30px] rounded-full border border-[#343268] flex items-center'>Who we are</button>
            <h2 className="text-[36px] font-semibold my-4">We Help To Get <br /> Soultions</h2>
            <p>We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve.</p>
             <button className='px-[28px] py-[8px] mt-[30px] rounded-[6px] bg-[#FFC637] flex items-center'>Learn more <FiArrowUpRight /></button>
            </div>
            <div className="lg:flex-1 relative lg:mt-0 mt-[20px]">
          
            <img className="" src={misson} alt="" />
           <div className="absolute lg:left-[-80px] lg:bottom-[-50px]">
           <div className="bg-[#343268] rounded-[32px] p-[20px] mt-[-80px] ps-[-40px] text-white">
            <h2 className="text-[36px] font-semibold my-4">Our mission is simple</h2>
            <p>To provide high-quality healthcare services <br /> that are accessible, personalized, and <br /> patient-centered.</p>
            </div>
            </div>
           </div>
        </div>
    );
};

export default Solutions;