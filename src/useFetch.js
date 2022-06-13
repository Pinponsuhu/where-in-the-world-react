import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const useFetch = (url) => {
    const navigate = useNavigate();
    const [country, setCountry] = useState(null);
    const [ pending, setPending ] = useState(true);
useEffect(()=>{
    fetch(url)
    .then( res => {
        if(res.status == 404){
            navigate('/not-found'); 
        }
        console.log(res.status);
        return res.json();
    })
    .then((data)=>{
        setCountry(data);
        setPending(false);
    })
    .catch((err)=>{
        console.log(err.message);
    })

  
},[]);
return { country, pending }
}
export default useFetch;