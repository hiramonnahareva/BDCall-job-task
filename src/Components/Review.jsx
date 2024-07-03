
import {AiFillStar, AiOutlineStar} from 'react-icons/ai';

import star from "../assets/star.png"

const Review = ({review}) => {
    const {title, reviewer, img, proffassion, description} = review;
    
    return (
        <div className={'p-5 text-center mx-4 mt-5 mb-5' }>
            <div className='flex justify-center'>
           
            </div>
            <h2 className='text-2xl text-start pt-5 font-bold pb-4 text-[#020043]'>{title}</h2>
            <p className='text-justify text-[#4D4C7B] mb-4'>{description}</p>
            <div className='flex gap-4'>
            <span>{img}</span>
            <div>
            <p><span>{reviewer}, </span> {proffassion} </p>
            <div className='flex gap-[4px] my-[4px]'><img className='w-4' src={star} alt="" /> <img className='w-4' src={star} alt="" /> <img className='w-4' src={star} alt="" /> <img className='w-4' src={star} alt="" /> <img className='w-4' src={star} alt="" /></div>
            </div>
            </div>
            
        </div>
    );
};

export default Review;