import {Link, NavLink} from "react-router";
import logo from '../../assets/logo.png'
import { FaGithub } from "react-icons/fa6";

const NavBar = () => {
    return (
        <div className="bg-base-100 shadow-sm ">
            <div className="navbar md:w-[1280px] mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {" "}
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />{" "}
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow hover:btn-ghost hover:btn"
                    >
                        <NavLink
                            to={"/"}
                            className={`text-blue-500 font-bold border-b-2 px-4 py-2 border-amber-700 hover:bg-blue-800 hover:text-white hover:font-bold hover:border-b-2 hover:px-4 hover:py-2 hover:rounded transition-all`}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to={"/apps"}
                            className={`text-blue-500 font-bold border-b-2 px-4 py-2 border-amber-700 hover:bg-blue-800 hover:text-white hover:font-bold hover:border-b-2 hover:px-4 hover:py-2 hover:rounded transition-all`}
                        >
                            Apps
                        </NavLink>
                        <NavLink
                            to={"/installation"}
                            className={`text-blue-500 font-bold border-b-2 px-4 py-2 border-amber-700 hover:bg-blue-800 hover:text-white hover:font-bold hover:border-b-2 hover:px-4 hover:py-2 hover:rounded transition-all`}
                        >
                            Installation
                        </NavLink>
                    </ul>
                </div>
                <Link to={'/'} className="flex items-center gap-1">
                <div>
                    <div className="w-[40px] h-[40px] "><img src={logo} alt="" /></div>
                </div>
                <p className="font-bold text-[#9F62F2] opacity-[88%] max-sm:hidden">HERO.IO</p>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 flex gap-4">
                    <NavLink
                        to={"/"}
                        className={`text-blue-500 font-bold border-b-2 px-4 py-2 border-amber-700 hover:bg-[#9F62F2] hover:text-white hover:font-bold hover:border-b hover:px-4 hover:py-2 hover:rounded transition-all`}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to={"/apps"}
                        className={`text-blue-500 font-bold border-b-2 px-4 py-2 border-amber-700 hover:bg-[#9F62F2] hover:text-white hover:font-bold hover:border-b hover:px-4 hover:py-2 hover:rounded transition-all`}
                    >
                        Apps
                    </NavLink>
                    <NavLink
                        to={"/installation"}
                        className={`text-blue-500 font-bold border-b-2 px-4 py-2 border-amber-700 hover:bg-[#9F62F2] hover:text-white hover:font-bold hover:border-b hover:px-4 hover:py-2 hover:rounded transition-all`}
                    >
                        Installation
                    </NavLink>
                </ul>
            </div>
            <div className="navbar-end">
                <Link to={"https://github.com/Misskhat"} target="blank" className={"btn text-xl text-white px-4 py-3 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] "}><FaGithub /> Contribute</Link>
            </div>
        </div>
        </div>
    );
};

export default NavBar;
