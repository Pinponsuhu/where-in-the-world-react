import { useNavigate } from 'react-router-dom';
const Back = () => {
    const navigate = useNavigate();
    return ( 
        <div className='mt-6 back px-3 md:px-12'>
                <button onClick={()=>{
                    navigate(-1);
                }} className="py-2.5 px-6 border-2 border-gray-900 shadow-md"><i className="fa fa-arrow-left text-gray-900"></i> Back</button>
            </div>
     );
}
 
export default Back;