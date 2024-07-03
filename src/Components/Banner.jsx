import banner from '../assets/banner.png'

const Banner = () => {
    return (
        <div className='flex justify-center lg:mx-20 mx-[20px] mb-20 mt-5'>
            
            <img className='w-full' src={banner} alt="" />
            
        </div>
    );
};

export default Banner;