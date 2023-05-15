import axios from "axios";
import { useEffect } from "react";
const UnfollowUser = () =>{
    const token = JSON.parse(localStorage.getItem('token'));
    useEffect(()=>{
        axios({
            method:'delete',
            url:'https://photo-sharing-api-bootcamp.do.dibimbing.id/api/v1/unfollow/5b7a6783-2071-4e9f-9b8e-8e7fc4a981d4',
            headers:{
                apiKey:'c7b411cc-0e7c-4ad1-aa3f-822b00e7734b',
                Authorization:`Bearer ${token}`
            }
        })
        .then(function(response){
            console.log(response.data);
        })
        },[])
return (
    <div>

    </div>
)
}
export default UnfollowUser
