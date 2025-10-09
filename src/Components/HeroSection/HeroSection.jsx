import { Link } from 'react-router';
import { BiLogoPlayStore } from "react-icons/bi";
import { FaAppStoreIos } from "react-icons/fa6";
import heroImg from '../../assets/hero.png'



const HeroSection = () => {
    return (
        <div>
            <div className='md:my-20 my-10 text-center'>
                <div className='md:w-[1280px] mx-auto'>
                    <h1 className='md:text-7xl text-4xl font-bold'>We Build <br /> <span className='text-[#9F62F2]'>Productive</span> Apps</h1>
                <p className='text-[#627382] mt-4 mb-10'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <div className='flex gap-2 items-center justify-center'>
                    <Link to={'https://play.google.com/store/games?hl=en'} target='blank' className=' btn'>
                        <BiLogoPlayStore className='text-2xl' />
                        Google Play
                    </Link>
                    <Link to={'https://www.apple.com/app-store/'} target='blank' className=' btn'>
                        <FaAppStoreIos className='text-2xl' /> 
                        App store
                    </Link>
                </div>
                <div className='md:flex items-center justify-center md:mt-10 mt-7'>
                    <img className='w-full md:w-2/3' src={heroImg} alt="" />
                </div>
                </div>
                <div className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-center text-white py-20 '>
                    <h3 className='md:text-5xl text-2xl font-bold pb-10'>Trusted by Millions, Built for You</h3>
                    <div className='md:w-[1280px] mx-auto flex max-sm:flex-col max-sm:gap-10 items-center justify-around'>
                        <div>
                            <p className='opacity-80 font-[400px] text-[16px]'>Total Downloads</p>
                            <h2 className='md:text-6xl text-2xl font-bold'>29.6M</h2>
                            <p className='opacity-80 font-[400px] text-[16px]'>21% more than last month</p>
                        </div>
                        <div>
                            <p className='opacity-80 font-[400px] text-[16px]'>Total Reviews</p>
                            <h2 className='md:text-6xl text-2xl font-bold'>906K</h2>
                            <p className='opacity-80 font-[400px] text-[16px]'>46% more than last month</p>
                        </div>
                        <div>
                            <p className='opacity-80 font-[400px] text-[16px]'>Active Apps</p>
                            <h2 className='md:text-6xl text-2xl font-bold'>132+</h2>
                            <p className='opacity-80 font-[400px] text-[16px]'>31 more will Launch</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;