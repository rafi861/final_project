import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
const Loginn = () =>{
    const token = JSON.parse(localStorage.getItem('token'));
    const [data, setData] = useState ([])
    useEffect(()=>{
        axios({
            method:'post',
            url:'https://photo-sharing-api-bootcamp.do.dibimbing.id/api/v1/login',           
            headers:{
                apiKey:'c7b411cc-0e7c-4ad1-aa3f-822b00e7734b'               
            },
            data:{
                "email": "muhammadrafi2544@gmail.com",
                "password": "qwerty123"
            }       
        })
        .then(function(response){
            console.log(response.data.user);

        })
        },[])
    return (
        <div>
           {data.map((item,index)=>{
            return (
                <div key={index} className="container  m-5">
                    <div className="text-center"><img className="img m-3" src={item.profilePictureUrl} alt=""/></div>
                    <p className="text-center">{item.username}</p>
                    <p className="text-center">{item.id}</p>
                    <p className="text-center">{item.email}</p>
                </div>
            )
        })} 
        </div>
    )
}
export default Loginn