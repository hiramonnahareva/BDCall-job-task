import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import ComprehensiveCare from "./Components/ComprehensiveCare";
import Solutions from "./Components/Solutions";
import EmpoweringHealth from "./Components/EmpoweringHealth";
import Reviews from "./Components/Reviews";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Faq from "./Components/Faq";
import Appoinment from "./Components/Appoinment";
import Footer from "./Components/Footer";


const App = () => {
  return (
    <div>
      <Navbar/>
      <Banner />
      <ComprehensiveCare/>
      <Solutions/>
      <EmpoweringHealth/>
      <Reviews/>
      <Faq/>
      <Appoinment/>
      <Footer/>
      
    </div>
  );
};

export default App;