
// import { img1 } from "../images";
import Questions from "./Questions";

 const FAQ = [
    {
        id: 1,
        title: " What are your office hours?",
        details: "Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours."
    },
    {
        id: 2,
        title: "How can I schedule an appointment?",
        details: "Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours."
    },
    {
        id: 3,
        title: "Do you accept insurance?",
        details: "Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours."
    },
    {
        id: 4,
        title: "What should I bring to my appointment?",
        details: "Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours."
    },
    {
        id: 5,
        title: "Do you offer telemedicine appointments?",
        details: "Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours."
    },
 ]


const Faq = () => {
    return (
        <div className="pb-20 lg:mx-40 m-[20px]">
            <button className='px-[28px] py-[8px] mt-[30px] rounded-full border border-[#343268] flex items-center'>FAQ</button>
            <h2 className="text-[36px] font-semibold mb-20">Frequently Asked Questions</h2>
           
                <div className="w-full">
                    {
                        FAQ.map((data) => <Questions key={data.id} data={data}/>)
                    }
                </div>
            
        </div>
    );
};

export default Faq;