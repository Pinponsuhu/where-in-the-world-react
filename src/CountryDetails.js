import useFetch from "./useFetch";
import { useParams } from 'react-router-dom';
import Country from "./Country";

const CountryDetails = () => {
    const { name } = useParams();
    // const url = `https://restcountries.com/v3.1/name/Germany`;
    const { country, pending } = useFetch("https://restcountries.com/v3.1/name/" + name);
    console.log(country);
    return ( 
        <div className="details">
            { pending  && <div className="md:w-10/12 mx-auto flex mt-10 flex-col md:flex-row gap-x-14  bg-white">
                    <div className="w-72 mx-auto md:w-96 h-72 bg-gradient-to-br from-gray-100 to-gray-300 animate-pulse"></div>
                    <div className="">
                    <div className="w-64 h-10 mt-5 bg-gradient-to-br from-gray-100 to-gray-300 animate-pulse"></div>
                    <div className="flex gap-x-6 mt-6">
                        <div>
                        <div className="w-64 h-8 bg-gradient-to-br from-gray-100 to-gray-300 animate-pulse"></div>
                    <div className="w-64 h-6 bg-gradient-to-br from-gray-100 to-gray-300 animate-pulse mt-4"></div>
                    <div className="w-64 h-6 bg-gradient-to-br from-gray-100 to-gray-300 animate-pulse mt-4"></div>
                    <div className="w-64 h-6 bg-gradient-to-br from-gray-100 to-gray-300 animate-pulse mt-4"></div>
                        </div>
                        <div>
                        <div className="w-64 h-8 bg-gradient-to-br from-gray-100 to-gray-300 animate-pulse"></div>
                    <div className="w-64 h-6 bg-gradient-to-br from-gray-100 to-gray-300 animate-pulse mt-4"></div>
                    <div className="w-64 h-6 bg-gradient-to-br from-gray-100 to-gray-300 animate-pulse mt-4"></div>
                    <div className="w-64 h-6 bg-gradient-to-br from-gray-100 to-gray-300 animate-pulse mt-4"></div>
                        </div>
                    </div>
                    </div>
                </div>}
            {!pending && <div>
            <Country country={country} />
            </div> }
        </div>
     );
}
 
export default CountryDetails;