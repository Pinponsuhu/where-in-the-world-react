import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-founs">
            <h1 className="text-5xl font-black text-center mt-28">Page Not Found</h1>
            <div className="flex justify-center mt-5">
                <Link to="/" className="bg-black py-3 px-9 rounded-md text-white">Go Home</Link>
            </div>
        </div>
     );
}
 
export default NotFound;