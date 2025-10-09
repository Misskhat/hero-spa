import { Link } from "react-router";
import errorPageImg from "../../assets/error-404.png";

const ErrorPage = () => {
    return (
            <div className="w-[1280px] mx-auto flex flex-col items-center">
                <div>
                    <img src={errorPageImg} alt="" />
                </div>
                <h2 className="mb-4 text-5xl font-bold">Oops, page not found!</h2>
                <p className="text-[#627382]">The page you are looking for is not available.</p>
                <Link to={'/'} className="btn text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] mt-4">Go Back!</Link>
            </div>
    );
};

export default ErrorPage;
