
import Slider from 'react-slick';
import Review from './Review';

import profile1 from '../assets/profile1.png'
import profile2 from '../assets/profile3.png'
import profile3 from '../assets/profile2.png'


const Reviews = () => {
    var settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 3000,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    
      const reviews = [
        {
            id: 1,
            title: "Expertise and Compassion Combined",
            reviewer: "Sarah D",
            description: "I can't thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.",
            proffassion: "IT Professional",
            img: <img src={profile1}/>
            
        },
        {
            id: 2,
            reviewer: "Michael R",
            title: "Life-Saving Care, Life-Changing Experience",
            description: "My experience at [Healthcare Provider Name] was life-changing. The prompt and accurate diagnosis, coupled with the advanced treatments they provided, saved my life.",
            proffassion: "Business Executive",
            img: <img src={profile2}/>
            
        },
       
        {
            id: 3,
            title: "A Partner in Health and Wellness",
            reviewer: "David S",
            description: "As a busy professional, I appreciate the convenience and quality of care I receive at [Healthcare Provider Name]. From telemedicine consultations to routine check-ups.",
            proffassion: " Lawyer",
            img: <img src={profile3}/>
            
        },
      ]
   
    
    
    return (   
       <div className='lg:m-40 mx-[20px]'>
            <button className='px-[28px] py-[8px] mt-[30px] rounded-full border border-[#343268] flex items-center'>Testimonial</button>
            <h2 className="text-[36px] font-semibold my-4">What they say about us</h2>
       {
        reviews.length ? 
        <div className='bg-white py-5'>
        <Slider {...settings}>
        {
            reviews.map((review) => <Review key={review._id} review={review}></Review>
            )
       }

   </Slider>
      </div> : <p>...</p>
       }
       </div>
    );
};

export default Reviews;