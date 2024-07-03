import Card from "./Card";
import pie from '../assets/pie.png'
import coin from '../assets/coin.png'
import certificate from '../assets/certificate.png'


const ComprehensiveCare = () => {

    

    return (
        <div className="">
           <div className="lg:relative my-10 lg:h-8 text-center">
           <h2 className="text-center text-[48px] font-bold color-[#020043] lg:absolute top-0 right-[35%] mb-20">Comprehensive Care <br /> for Every Patient</h2>
           </div>
          <div className="">
          <Card/>
          </div>
        </div>
    );
};

export default ComprehensiveCare;