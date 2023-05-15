import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
const PostId = () =>{
    const token = JSON.parse(localStorage.getItem('token'));
    const [data, setData] = useState ([])
    useEffect(()=>{
        axios({
            method:'get',
            url:'https://photo-sharing-api-bootcamp.do.dibimbing.id/api/v1/users-post/5b7a6783-2071-4e9f-9b8e-8e7fc4a981d4?size=10&page=1',
            headers:{
                apiKey:'c7b411cc-0e7c-4ad1-aa3f-822b00e7734b',
                Authorization:`Bearer ${token}`
            }
        })
        .then(function(response){
            console.log(response.data.data.posts);
            setData(response.data.data.posts)
        })
        },[])
return (
    <div>
        {data.map((item,index)=>{
            return (
                <div key={index}>
                    <p>{item.id}</p>
                </div>
            )
        })}
    </div>
)
}
export default PostId