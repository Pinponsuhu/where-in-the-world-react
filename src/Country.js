import Back from "./Back";

const Country = ({ country }) => {
    // const { country:aa, pending } = useFetch("https://restcountries.com/v3.1/all");
    const nativeKey = Object.values(country[0].name.nativeName) ;
    const currencies = Object.values(country[0].currencies) ;
    const language = Object.values(country[0].languages) ;
    // const borders = Object.values(country[0].borders)
    // const allNames= Object.values(names.name.common);
    // const [all, setAll] = useState([]);
    // aa.map(a=>{all.push(a.name.common)})
    // for(let i = 0; i <= aa.length; i++){
        // console.log(Object.values(aa.name.common));
    
    // aa.forEach((a,index)=>{
        // console.log(all);
    // });
    // console.log(country[0].area);
    return ( 
        <div className="country">
            <Back />
            <section className='px-8 md:px-24 mt-8 md:flex gap-x-28'>
                <div>
                    <img src={country[0].flags.png} alt="" className="w-auto h-72" />
                </div>
               <div className="">
               <h1 className="text-3xl font-bold my-5">{country[0].name.common}</h1>
                <h2 className="font-bold text-2xl mb-3">{country[0].name.population}</h2>
               <div className="md:flex gap-x-8">
                <div>
                    <div>
                    <p className="mb-2 text-lg font-medium"><b>Native name: </b> {nativeKey[0].common}</p>
                    <p className="mb-2 text-lg font-medium"><b>Population: </b> {country[0].population}</p>
                    <p className="mb-2 text-lg font-medium"><b>Region: </b> {country[0].region}</p>
                    <p className="mb-2 text-lg font-medium"><b>Sub Region: </b> {country[0].subregion}</p>
                    <p className="mb-2 text-lg font-medium"><b>Capital: </b> {country[0].capital}</p>
                    </div>
                </div>
                <div>
                <p className="mb-2 text-lg font-medium"><b>Top Level Domain: </b> {country[0].tld}</p>
                <p className="mb-2 text-lg font-medium"><b>Currencies: </b> {currencies[0].name}</p>
                <p className="mb-2 text-lg font-medium"><b>Languages: </b> {language[0]}</p>
                {/* {borders.forEach((border)=>{
                    names
                })} */}
                </div>
                </div>
               </div>
               <div>

               </div>
            </section>
        </div>
     );
}
 
export default Country;