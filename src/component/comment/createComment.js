import axios from "axios";
import { useEffect } from "react";
const CreateComment = () =>{
    const token = JSON.parse(localStorage.getItem('token'));
    useEffect(()=>{
        axios({

            method:'post',
            url:'https://photo-sharing-api-bootcamp.do.dibimbing.id/api/v1/create-comment',
            headers:{
                apiKey:'c7b411cc-0e7c-4ad1-aa3f-822b00e7734b',
                Authorization:`Bearer ${token}`
            },
            data:{
                "postId": "9a7f4133-2111-43b4-9d26-271e25b78679",
                "comment": "Pengen juga jadinya"
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
export default CreateComment