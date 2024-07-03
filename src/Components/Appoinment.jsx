import { FiArrowUpRight } from 'react-icons/fi';
import image from '../assets/appoinment.png'
import logo from '../assets/DOC+.png'

const Appoinment = () => {
    return (
        <div className='flex justify-center relative lg:m-0 m-[20px]'>

            <img src={image} alt="" />

            <div className='absolute lg:left-56 left-5 right-20 lg:right-56 lg:top-20 top-2'>
                <div className='flex justify-between items-start w-full'>
                    <div>
                        <h2 className='text-2xl lg:text-[40px] text-white'>Get Your <br /> First Appointment <br /> at 50% Off! </h2>
                        <div className='flex gap-[20px]'>
                            <button className='px-[28px] py-[8px] mt-[30px] rounded-[6px] border bg-[#FFC637] flex items-center'>Appointment <FiArrowUpRight /></button>
                            <button className='px-[28px] py-[8px] mt-[30px] rounded-[6px] border text-white border-[#ffffff] flex items-center'>Appointment <FiArrowUpRight /></button>
                        </div>
                    </div>
                <img className='lg:w-20 w-10' src={logo} alt="" />
                </div>
            </div>
            

        </div>
    );
};

export default Appoinment;