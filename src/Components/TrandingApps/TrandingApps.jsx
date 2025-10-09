import React from 'react';
import TrandingApp from '../TrandingApp/TrandingApp';


const TrandingApps = () => {
    return (
        <div className='w-[1280px] mx-auto my-20'>
            <div className='text-center my-10'>
                <h2 className='font-bold text-5xl text-[#001931] mb-4'>Trending Apps</h2>
                <p className='text-xl text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div>
                <TrandingApp></TrandingApp>
            </div>
        </div>
    );
};

export default TrandingApps;