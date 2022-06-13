import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    
    const [region, setRegion] = useState('');
    const [search, setSearch] = useState('');
    const navigate = useNavigate();
    const handleRegion = (e)=>{
        this.form.submit();
        e.preventDefault();
        navigate('/shaba');
    }
    const handleSearch = (e)=>{
        e.preventDefault();
        navigate('/country/' + search);
    }
    return ( 
            <div className="px-8 flex mt-5 flex-col gap-y-8 md:gap-y-0 md:flex-row md:justify-between md:items-center">
            <section className="w-64 bg-white shadow-md md:w-96 flex items-center gap-x-2 px-4">
                <i className="text-gray-700 fa fa-search block mr-2 text-lg"></i>
                <form action="" onSubmit={handleSearch} className="w-full block" method="get">
                    <input type="search" value={search} onChange={(e)=>{
                        setSearch(e.target.value);
                    }} className="w-full block outline-none py-4" placeholder="Search for a country" />
                </form>
            </section>
            <form action="" onSubmit={handleRegion} className="block md:mt-0">
                <select name="" onChange={(e)=>{
                    setRegion(e.target.value);
                    
                    console.log(search);
                    this.form.submit();
                }} value={region} className="py-3 h-12 text-gray-700 bg-white w-52 block text-center rounded-md shadow-md px-6" id="">
                    <option value="" disabled>Filter by Region</option>
                    <option value="Africa">Africa</option>
                    <option value="America">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
                <p>{ region }</p>
            </form>
        </div>
     );
}
 
export default NavBar;