import { useState } from 'react';
import logo from '../assets/logo.png';
import {FaTimes} from 'react-icons/fa';
import { HiMenuAlt1 } from "react-icons/hi";
import { FiArrowUpRight } from 'react-icons/fi';


const Navbar = () => {
    const [click, setClick] = useState('')
    const handleClick = () =>  setClick(!click); 

    const content =  <nav className='z-10 lg:hidden fixed top-0 left-0 bottom-0 pt-[20px] bg-[#6b5899] w-[300px] flex gap-[20px] flex-col items-center transition ease-out duration-700'>
           <button className="absolute top-[25px] right-[25px] sm:hidden hover:transition" onClick={handleClick}>
           {click &&  <FaTimes className="text-white"/>}
         </button>
            <img className='my-[30px]' src={logo} alt="" />
            <ul className=' text-[18px] flex flex-col gap-[36px]'>
                <li>Home</li>
                <li>Services</li>
                <li>Blogs</li>
                <li>About Us</li>
            </ul>
           <button className='px-[28px] py-[8px] mt-[30px] rounded-[6px] border border-[#343268] flex items-center'>Appointment <FiArrowUpRight /></button>
           </nav>
    return (
        <div className="lg:px-[100px] lg:py-[20px] p-[40px]">
           <nav className='flex justify-between items-center'>
            <img src={logo} alt="" />
            <ul className='text-[#343268] text-[18px] lg:flex hidden gap-[36px]'>
                <li>Home</li>
                <li>Services</li>
                <li>Blogs</li>
                <li>About Us</li>
            </ul> 
            <button className='px-[28px] py-[8px] rounded-[6px] border border-[#343268] lg:flex items-center hidden'>Appointment <FiArrowUpRight /></button>
           {
             <button className="block sm:hidden hover:transition-none " onClick={handleClick}>
             {!click &&  <HiMenuAlt1 className="text-[25px]"/>}
          </button>

           }
           </nav>

           {/* ========== Responsiveness =========== */}

           {
            click && content
           }
        </div>
    );
};

export default Navbar;