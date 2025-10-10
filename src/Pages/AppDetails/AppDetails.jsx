import download from '../../assets/icon-downloads.png'
import rating from '../../assets/icon-ratings.png'
import review from '../../assets/icon-review.png'
import {useLoaderData, useParams} from "react-router";

const AppDetails = () => {
    const {id} = useParams();
    // console.log(id);
    let idConvert = parseInt(id)
    // console.log(idConvert);
    const data = useLoaderData();
    // console.log(data);
    const clickApp = data.find(app => app.id === idConvert);
    // console.log(clickApp);
    const {image, title, companyName, description, size, reviews, ratingAvg, downloads} = clickApp
    return (
        <div className="w-[1280px] mx-auto my-20">
            <div className="flex gap-10">
                <div className="w-[350px] h-[350px] rounded">
                    <img className='w-[350px] h-[350px] object-cover' src={image} alt="" />
                </div>
                <div className="flex-1">
                    <h3 className="text-4xl font-bold"> {title} </h3>
                    <p className="font-semibold text-[#627382]">Developed by <span className="text-[#9F62F2]">{companyName} </span></p>
                    <div className="divider"></div>
                    <div className="flex gap-10 items-center mt-8">
                        <div>
                            <div>
                                <img className='w-[40px] h-[40px]' src={download} alt="" />
                            </div>
                            <p className='text[1rem] opacity-80 mt-2 mb-2'>Downloads</p>
                            <h3 className='font-extrabold text-4xl'><span> {downloads / 100000} </span>M</h3>
                        </div>
                        <div>
                            <div>
                                <img className='w-[40px] h-[40px]' src={rating} alt="" />
                            </div>
                            <p className='text[1rem] opacity-80 mt-2 mb-2'>Average Ratings</p>
                            <h3 className='font-extrabold text-4xl'> {ratingAvg} </h3>
                        </div>
                        <div>
                            <div>
                                <img className='w-[40px] h-[40px]' src={review} alt="" />
                            </div>
                            <p className='text[1rem] opacity-80 mt-2 mb-2'>Total Reviews</p>
                            <h3 className='font-extrabold text-4xl'><span> {reviews / 1000} </span>K</h3>
                        </div>
                    </div>
                     <button className="btn btn-success bg-[#00D390] text-white mt-7">Install Now ({size}MB)</button>
                </div>
            </div>
            <div className='divider'></div>
            <h3 className='text-2xl font-bold mt-10 mb-6'>Description</h3>
            <div className='text-[#627382]'>
                <p className='text-justify'> {description} </p>
            </div>
        </div>
    );
};

export default AppDetails;
