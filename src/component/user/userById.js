import axios from "axios"
import { useEffect, useState } from "react"
import React from "react"
const UserId = () =>{
    const token = JSON.parse(localStorage.getItem('token'));

    const [data, setData] = useState([])
    useEffect(()=>{
axios({
    method:'get',
    url:'https://photo-sharing-api-bootcamp.do.dibimbing.id/api/v1/user/5b7a6783-2071-4e9f-9b8e-8e7fc4a981d4',
    headers:{
        apiKey:'c7b411cc-0e7c-4ad1-aa3f-822b00e7734b',
        Authorization:`Bearer ${token}`
    }
}).then(function(response){
    console.log(response.data.data);
    setData(response.data.data)
})
},[])

    return (
        <div>
            {data.map(item=>{
                return (
                    <div>
                        {item.id}
                    </div>
                )
            })}
        </div>
    )
}
export default UserId