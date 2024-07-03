import { FiArrowUpRight } from 'react-icons/fi';
import advanceTach from '../assets/advanceedTech.png'
import onlineDoctor from '../assets/onlineDoctor.png'
import consultancy from '../assets/consultancy.png'

const EmpoweringHealth = () => {
    return (
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:m-40 m-[20px] gap-10 items-center">
            <div className="">
            <button className='px-[28px] py-[8px] mt-[30px] rounded-full border border-[#343268] flex items-center'>Service</button>
            <h2 className="text-[36px] font-semibold my-4">Empowering Health, <br /> Enriching Lives</h2>
            <p>We are committed to providing high-quality, compassionate care to every patient we serve. Whatever your healthcare needs may be, you can trust us to be your partner in health and wellness.         </p>
                <button className='px-[28px] py-[8px] mt-[30px] rounded-[6px] bg-[#FFC637] flex items-center'>Learn more <FiArrowUpRight /></button>
            </div>
          
            <img className="w-full" src={advanceTach} alt="" />
            <img className="w-full" src={consultancy} alt="" />
            <img className="w-full" src={onlineDoctor} alt="" />
           </div>
    );
};

export default EmpoweringHealth;