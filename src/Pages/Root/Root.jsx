import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import {Outlet} from "react-router";

const Root = () => {
    return (
        <div className="flex flex-col h-svh">
            <NavBar></NavBar>
            <div className="flex-1 bg-[#F5F5F5]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;
