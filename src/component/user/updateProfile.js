import { useEffect } from "react";
import axios from "axios";
const Update = () =>{
    const token = JSON.parse(localStorage.getItem('token'));
    useEffect(()=>{
        axios({
            method:'post',
            url:'https://photo-sharing-api-bootcamp.do.dibimbing.id/api/v1/update-profile',           
            headers:{
                apiKey:'c7b411cc-0e7c-4ad1-aa3f-822b00e7734b',
                Authorization:`Bearer ${token}`
            },
            data:{
                "name": "Miftah Farhan",
                "username": "miftahfarhan",
                "email": "miftahfarhan3@gmail.com",
                "profilePictureUrl": "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
                "phoneNumber": "08976041232",
                "bio": "",
                "website": ""
            }
            
        })
        .then(function(response){
            console.log(response);
        })
        },[])
return (
    <div>

    </div>
)
}
export default Update