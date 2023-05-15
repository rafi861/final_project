import axios from "axios";
import { useEffect } from "react";
const Logout = ()=>{
    const token = JSON.parse(localStorage.getItem('token'));

    useEffect(()=>{
        axios({

            method:'get',
            url:'https://photo-sharing-api-bootcamp.do.dibimbing.id/api/v1/logout',
            headers:{
                apiKey:'c7b411cc-0e7c-4ad1-aa3f-822b00e7734b',
                Authorization:`Bearer ${token}`
            }
        })
        .then(function(response){
            console.log(response.data);
        })
        },[])
    return(
        <div>

        </div>
    )
}
export default Logout