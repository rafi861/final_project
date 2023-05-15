import axios from "axios";
import { useEffect } from "react";
const DeletePost = () =>{
    const token = JSON.parse(localStorage.getItem('token'));

    useEffect(()=>{
        axios({
            method:'delete',
            url:'https://photo-sharing-api-bootcamp.do.dibimbing.id/api/v1/delete-post/801c502b-acc2-488f-b364-64e7f8e2ab03',
            headers:{
                apiKey:'c7b411cc-0e7c-4ad1-aa3f-822b00e7734b',
                Authorization:`Bearer ${token}`
            }
        })
        .then(function(response){
            console.log(response);
        })
        },[])
}
export default DeletePost