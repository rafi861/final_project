import axios from "axios";
import { useEffect } from "react";
const LikePost = () =>{
    const token = JSON.parse(localStorage.getItem('token'));
    useEffect(()=>{
        axios({
            method:'post',
            url:'https://photo-sharing-api-bootcamp.do.dibimbing.id/api/v1/like',
            headers:{
                apiKey:'c7b411cc-0e7c-4ad1-aa3f-822b00e7734b',
                Authorization:`Bearer ${token}`
            },
            data:{
                "postId": "8a79d3ec-d1d4-424c-99d5-3a0a066739a5"
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
export default LikePost