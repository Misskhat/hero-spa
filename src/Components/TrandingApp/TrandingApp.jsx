import downloadsIcon from '../../assets/icon-downloads.png'
import ratingIcon from '../../assets/icon-ratings.png'

const TrandingApp = ({app}) => {
    const {image,title, ratingAvg, downloads} = app
    return (
        <div>
            <div className='h-[425px] w-[298px] rounded-xs p-4 shadow-md'>
                <div className='flex  w-[266px] h-[264px] bg-[#D9D9D9] rounded-[8px]'>
                    <img className='w-[266px] h-[266px] object-cover rounded-xs' src={image} alt={title} />
                </div>
                <p className='py-4'> {title} </p>
                <div className='flex items-center justify-between'>
                    <button className='btn text-[#00D390] bg-[#F1F5E8]'>
                        <img className='w-[16px] h-[16px]' src={downloadsIcon} alt="" />
                        <p><span> {downloads} </span>M</p>
                    </button>
                    <button className='btn text-[#FF8811] bg-[#FFF0E1]'>
                        <img className='w-[16px] h-[16px]' src={ratingIcon} alt="" />
                        <p> {ratingAvg} </p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TrandingApp;