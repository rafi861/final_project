import axios from "axios";
import { useEffect } from "react";
const UpdatePost = () => {
    const token = JSON.parse(localStorage.getItem('token'));
    useEffect(()=>{
        axios({
            method:'post',
            url:'https://photo-sharing-api-bootcamp.do.dibimbing.id/api/v1/update-post/b3465f33-5ffc-49ac-94f0-6103f5cab750',
            headers:{
                apiKey:'c7b411cc-0e7c-4ad1-aa3f-822b00e7734b',
                Authorization:`Bearer ${token}`
            },
            data:{
                "imageUrl": "https://www.masakapahariini.com/wp-content/uploads/2023/03/shutterstock_1949306203.jpg",
                "caption": "Ayam geprek bensu"
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
export default UpdatePost