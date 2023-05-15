import { useEffect } from "react";
import React from "react";
import axios from "axios";
import { useState } from "react";
const MyFolowingPost = () =>{
    const token = JSON.parse(localStorage.getItem('token'));
    const [data, setData] = useState ([])
    useEffect(()=>{
        axios({
            method:'get',
            url:'https://photo-sharing-api-bootcamp.do.dibimbing.id/api/v1/following-post?size=10&page=1',
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
                    <img className="" src={item.imageUrl} alt=""/>
                    <p>{item.caption}</p>
                    <p>{item.id}</p>
                    <p>{item.updatedAt}</p>
                </div>
            )
        })}
        </div>
    )
}
export default MyFolowingPost