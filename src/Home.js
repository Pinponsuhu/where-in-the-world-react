import CountryList from "./CountryList";
import NavBar from "./NavBar";
import useFetch from "./useFetch";

const Home = () => {
    const { country, pending } = useFetch("https://restcountries.com/v3.1/all");
    // console.log(Object.values(country[0]));
    // console.log(data);

    return ( 
        <div className="countries">
            { pending && <section className="grid md:grid-cols-2 lg:grid-cols-3 w-screen md:px-16 text-gray-900 gap-y-12 md:gap-x-12  mt-8">
                <div className="w-72 mx-auto md:w-80 lg:w-full bg-white shadow-lg">
                    <div className="w-full h-52 bg-gradient-to-br from-gray-100 to-gray-300 animate-pulse"></div>
                    <div className="p-8">
                    <div className="w-full h-8 bg-gradient-to-br from-gray-100 to-gray-300 animate-pulse"></div>
                    <div className="w-full h-6 bg-gradient-to-br from-gray-100 to-gray-300 animate-pulse mt-4"></div>
                    <div className="w-full h-6 bg-gradient-to-br from-gray-100 to-gray-300 animate-pulse mt-4"></div>
                    <div className="w-full h-6 bg-gradient-to-br from-gray-100 to-gray-300 animate-pulse mt-4"></div>
                    </div>
                </div>
                <div className="w-72 hidden md:block mx-auto md:w-80 lg:w-full bg-white shadow-lg">
                <div className="w-full h-52 bg-gradient-to-br from-gray-100 to-gray-300 animate-pulse"></div>
                    <div className="p-8">
                    <div className="w-full h-8 bg-gradient-to-br from-gray-100 to-gray-300 animate-pulse"></div>
                    <div className="w-full h-6 bg-gradient-to-br from-gray-100 to-gray-300 animate-pulse mt-4"></div>
                    <div className="w-full h-6 bg-gradient-to-br from-gray-100 to-gray-300 animate-pulse mt-4"></div>
                    <div className="w-full h-6 bg-gradient-to-br from-gray-100 to-gray-300 animate-pulse mt-4"></div>
                    </div>
                </div>
                <div className="w-72 hidden md:block mx-auto md:w-80 lg:w-full bg-white shadow-lg">
                <div className="w-full h-52 bg-gradient-to-br from-gray-100 to-gray-300 animate-pulse"></div>
                    <div className="p-8">
                    <div className="w-full h-8 bg-gradient-to-br from-gray-100 to-gray-300 animate-pulse"></div>
                    <div className="w-full h-6 bg-gradient-to-br from-gray-100 to-gray-300 animate-pulse mt-4"></div>
                    <div className="w-full h-6 bg-gradient-to-br from-gray-100 to-gray-300 animate-pulse mt-4"></div>
                    <div className="w-full h-6 bg-gradient-to-br from-gray-100 to-gray-300 animate-pulse mt-4"></div>
                    </div>
                </div>
                </section>}
            { country && <NavBar /> }
            { country && <CountryList countries= {country} /> }
        </div>
     );
}
 
export default Home;