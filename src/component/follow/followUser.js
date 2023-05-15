import axios from "axios";
import { useEffect } from "react";
const FollowUser = () =>{
    const token = JSON.parse(localStorage.getItem('token'));
    useEffect(()=>{
        axios({
            method:'post',
            url:'https://photo-sharing-api-bootcamp.do.dibimbing.id/api/v1/follow',
            headers:{
                apiKey:'c7b411cc-0e7c-4ad1-aa3f-822b00e7734b',
                Authorization:`Bearer ${token}`
            },
            data:{
                "userIdFollow": "43516236-8bd5-4c43-98ac-8661f3d5b272"
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
export default FollowUser