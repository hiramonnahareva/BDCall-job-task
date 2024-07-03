
import pie from '../assets/pie.png'
import coin from '../assets/coin.png'
import certificate from '../assets/certificate.png'
import groupPeople from '../assets/groupPeople.png'
import star from '../assets/star.png'
import video from '../assets/video.png'


const Card = () => {
    return (
        <div className="lg:flex items-end gap-[20px] mx-20 justify-center">

            {/* ========== Card 1 ========= */}

            <div className='text-[#020043] bg-[#FBFBFB] p-[20px] border border-[#02004333] rounded-[24px] w-[216px] mt-5'>
                <h2 className='text-[40px] font-bold'>90%</h2>
                <p className='text-wrap'>Patient satisfaction <br /> rate, reflecting <br /> our commitment.</p>
                <div className='flex justify-center mt-5'>
                <img className='' src={pie} alt="" />
                </div>

            </div>

            {/* ========== Card 2 ========= */}

            <div className='text-[#020043] bg-[#FBFBFB] p-[20px] border border-[#02004333] rounded-[24px] w-[216px] mt-5'>
                <h2 className='text-[40px] font-bold'>500+</h2>
                    <p>Board-certified <br /> doctors</p>
                    <img className='ms-20' src={certificate} alt="" />

            </div>
            {/* ========== Card 3 ========= */}

            <div className='text-[#020043] bg-[#FBFBFB] p-[20px] border border-[#02004333] rounded-[24px] w-[216px] mt-5'>
                <div className='flex items-center gap-[10px]'>
                <h2 className='text-[40px] font-bold'>4.8</h2>
                <img src={star} alt="" />
                </div>
                    <p>Over 20,000 Patient</p>
                    <img className='mt-5' src={groupPeople} alt="" />

            </div>

             {/* ========== Card 4 ========= */}

             <div className='text-[#020043] bg-[#FBFBFB] p-[20px] border border-[#02004333] rounded-[24px] w-[216px] mt-5'>
                <h2 className='text-[40px] font-bold'>$5000</h2>
                    <p>Money spend <br /> for poor patient</p>
                    <img className='ms-20' src={coin} alt="" />

            </div>

             {/* ========== Card 5 ========= */}

             <div className='text-[#020043] bg-[#FBFBFB] p-[20px] border border-[#02004333] rounded-[24px] w-[216px] mt-5'>
                <h2 className='text-[40px] font-bold'>50+</h2>
                <p className='text-wrap'>Free lession video <br /> for patient</p>
                <div className='flex justify-center mt-5'>
                <img className='' src={video} alt="" />
                </div>

            </div>

        </div>
    );
};

export default Card;