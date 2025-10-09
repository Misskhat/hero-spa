import downloadsIcon from '../../assets/icon-downloads.png'
import ratingIcon from '../../assets/icon-ratings.png'

const TrandingApp = () => {
    return (
        <div>
            <div className='h-[435px] w-[316px] rounded-xs p-4 shadow-md'>
                <div className='w-[284px] h-[284px] bg-[#D9D9D9] rounded-[8px]'>
                    <img src="" alt="" />
                </div>
                <p className='py-4'>name</p>
                <div className='flex items-center justify-between'>
                    <button className='btn text-[#00D390] bg-[#F1F5E8]'>
                        <img className='w-[16px] h-[16px]' src={downloadsIcon} alt="" />
                        <p><span></span>M</p>
                    </button>
                    <button className='btn text-[#FF8811] bg-[#FFF0E1]'>
                        <img className='w-[16px] h-[16px]' src={ratingIcon} alt="" />
                        <p>9</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TrandingApp;