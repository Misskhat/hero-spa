import { Link } from "react-router";
import TrandingApp from "../TrandingApp/TrandingApp";

const TrandingApps = ({data}) => {
    // console.log(data);
    const featuredApps = data.slice(0,8);
    // console.log(featuredApps);
    return (
        <div className="w-[1280px] mx-auto my-20 flex flex-col items-center justify-center">
            <div className="text-center my-10">
                <h2 className="font-bold text-5xl text-[#001931] mb-4">Trending Apps</h2>
                <p className="text-xl text-[#627382]">Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className="grid grid-cols-4 gap-5">
                {featuredApps.map((app) => (
                    <TrandingApp key={app.id} app={app}></TrandingApp>
                ))}
            </div>
            <Link className="btn bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] mt-10 text-white border-[#9F62F2]">Show All</Link>
        </div>
    );
};

export default TrandingApps;
