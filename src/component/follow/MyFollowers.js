import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
const MyFollowers = () =>{
    const token = JSON.parse(localStorage.getItem('token'));
    const [data, setData] = useState ([])
    useEffect(()=>{
        axios({
            method:'get',
            url:'https://photo-sharing-api-bootcamp.do.dibimbing.id/api/v1/my-followers?size=10&page=1',
            headers:{
                apiKey:'c7b411cc-0e7c-4ad1-aa3f-822b00e7734b',
                Authorization:`Bearer ${token}`
            }
        })
        .then(function(response){
            console.log(response.data.data.users);
            setData(response.data.data.users)
        })
        },[])
    return (
        <div>
            {data.map((item,index)=>{
            return (
                <div key={index} className="container  m-5">
                    <div className="text-center m-3"><img className="img" src={item.profilePictureUrl} alt=""/></div>
                    <p className="text-center">{item.username}</p>
                    <p className="text-center">{item.id}</p>
                    <p className="text-center">{item.email}</p>
                </div>
            )
        })}
        </div>
    )
}
export default MyFollowers