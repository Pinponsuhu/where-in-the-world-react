import { Link } from "react-router-dom";

const CountryList = ({ countries }) => {
    
    return ( 
        <div className="md:w-10/12 lg:w-11/12 mx-auto grid md:grid-cols-2 lg:grid-cols-3 text-gray-900 gap-y-12 md:gap-x-12 mt-8">
            {countries.map((country,index)=>(
            <div key={index} className="w-72 mx-auto md:w-80 lg:w-full bg-white shadow-md hover:shadow-lg">
            <Link to={ "/country/" + country.name.common }>
                <img src={country.flags.png} className="h-52 w-full shadow-md block" alt="" />
                <div className="p-8">
                    <h2 className="font-bold text-xl mb-3">{country.name.common}</h2>
                    <p className="mb-2 text-md font-medium"><b>Population:</b> {country.population}</p>
                    <p className="mb-2 text-md font-medium"><b>Region:</b> {country.region}</p>
                    <p className="mb-2 text-md font-medium"><b>Capital:</b> {country.capital}</p>
                </div>
           </Link>
            </div>
        ))}
        </div>
     );
}
 
export default CountryList;