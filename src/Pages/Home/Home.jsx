import { useLoaderData } from "react-router";
import HeroSection from "../../Components/HeroSection/HeroSection";
import TrandingApps from "../../Components/TrandingApps/TrandingApps";


const Home = () => {
    const data = useLoaderData()
    // console.log(data);
    return (
        <div>
            {/* hero section */}
            <HeroSection></HeroSection>
            <TrandingApps data={data}></TrandingApps>
            <div className="gird grid-cols-4 gap-4">

            </div>
        </div>
    );
};

export default Home;