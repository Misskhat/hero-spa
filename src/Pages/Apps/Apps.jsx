import { IoSearch } from "react-icons/io5";
import { useLoaderData } from "react-router";
import TrandingApp from "../../Components/TrandingApp/TrandingApp";
import { useState } from "react";

const Apps = () => {
    
    const data = useLoaderData()
    const [search, setSearch] = useState('')
    const term = search?.trim()?.toLowerCase()
    const searchProduct = term ? data.filter(app=> app.name?.toLowerCase()?.includes(term)): data 

    console.log(searchProduct);

    return (
        <div className="mx-auto my-20">
            <div className="text-center">
                <h2 className="text-5xl font-bold mb-4">Our All Applications</h2>
                <p className="text-[#627382]">Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className="mt-12 mb-10 md:flex items-center justify-between md:w-[1280px] mx-auto">
                <div className="max-sm:mb-4  max-sm:text-center text-xl font-bold">
                    <h4>({data.length}) Apps Found</h4>
                </div>
                <div className="max-sm:p-4">
                    <label className="input">
                        <IoSearch className="opacity-50 text-xl" />
                        <input defaultValue={search} onChange={e=>setSearch(e.target.value)} type="search" required placeholder="Search" />
                    </label>
                </div>
            </div>
            <div className="grid md:grid-cols-4 grid-cols-1 gap-5 md:w-[1280px] mx-auto">
                {
                    searchProduct.map(app=> <TrandingApp key={app.id} app={app}></TrandingApp>)
                }
            </div>
        </div>
    );
};

export default Apps;
