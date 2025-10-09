import React from "react";
import logo from "../../assets/logo.png";
import {FaFacebookF} from "react-icons/fa6";
import {FaTwitter} from "react-icons/fa6";
import {FaLinkedinIn} from "react-icons/fa";
import {Link} from "react-router";

const Footer = () => {
    return (
        <div className="bg-neutral">
            <footer className="footer sm:footer-horizontal text-neutral-content px-7 pt-5 pb-2
             md:flex justify-between items-center md:w-[1280px] mx-auto">
                <aside>
                    <div className="flex gap-1 items-center">
                        <img className="w-[40px] h-[40px]" src={logo} alt="" />
                        <span className="font-bold">HERO.IO</span>
                    </div>
                    <p className="w-2/3">Trusted Application Information and Installation Service</p>
                </aside>
                <nav>
                    <h6 className=" text-white text-xl">Social Links</h6>
                    <div className="grid grid-flow-col gap-4 text-xl">
                        <Link to={"https://x.com/MisskhatHossen"} target="blank">
                            <FaTwitter />
                        </Link>
                        <Link to={"https://www.linkedin.com/in/md-misskhat-hossen/"} target="blank">
                            <FaLinkedinIn />
                        </Link>
                        <Link to={"https://www.facebook.com/mishkathossain.milon"} target="blank">
                            <FaFacebookF />
                        </Link>
                    </div>
                </nav>
            </footer>
            <footer className="footer sm:footer-horizontal footer-center bg-neutral text-white pb-2 pt-1 border-t-1 border-gray-700">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by HERO.IO</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;
