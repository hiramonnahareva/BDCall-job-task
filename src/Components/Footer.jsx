import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

import logo from "../assets/DOC+.png"

const Footer = () => {

    return (
        <footer className=" bg-[#020043] mt-20 py-20 text-white">
            <div className="top-0 left-0 w-[100%] overflow-hidden">
                <img className="mx-20" src={logo} alt="" />
                <div className="grid lg:grid-cols-4 gap-20 sm:grid-cols-1 p-20">
                    <div className="flex flex-col gap-5">
                   
                        <p>
                            123 Main Street Anytown, USA
                            Postal Code: 12345
                            </p>
                                <p> Support: support@oyolloo.com
                                                    (Available : 10:00am to 07:00pm)</p>
                    </div>
                    <div>
                        
                        <li className="my-4 list-none">Home</li>
                        <li className="my-4 list-none">About Us</li>
                        <li className="my-4 list-none">Success Page</li>
                        <li className="my-4 list-none">Terms And Condition</li>
                    </div>

                    <div>
                        <li className="text-[22px] list-none font-semibold py-2 uppercase">
                            Creativity</li>
                        <li className="my-4 list-none">Services</li>
                        <li className="my-4 list-none">Scheduling</li>
                        <li className="my-4 list-none">Patient Portal</li>
                    </div>
                    <div className="mb-4 md:mb-0">
                        <p className="text-[16px] my-4">Follow Us</p>
                        <div className="flex space-x-4">
                            <a
                                className="transform hover:scale-150 
                            transition-all duration-150 ease-in-out" href="">
                                <FaGithub />
                            </a>
                            <a
                                className="transform hover:scale-150
                             transition-all duration-150 ease-in-out" href="">
                                <FaLinkedinIn />
                            </a>
                            <a
                                className="transform hover:scale-150
                             transition-all duration-150 ease-in-out" href="">
                                <FaTwitter />
                            </a>
                            <a
                                className="transform hover:scale-150
                             transition-all duration-150 ease-in-out" href="">
                                <FaInstagram />
                            </a>
                        </div>
                            <p className="my-4">@Docplus 2024</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;