import About from "../About/About";
import Address from "../Address/Address";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";

const Home = () => {
    return (
        <div className="pb-1">
           <Banner></Banner>
           <About></About>
           <Services></Services>
           <Address></Address>
        </div>
    );
};

export default Home;