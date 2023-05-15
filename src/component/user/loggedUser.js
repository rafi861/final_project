import axios from 'axios'
import react, { useEffect } from 'react'

const User = () => {
    const token = JSON.parse(localStorage.getItem('token'));

    useEffect(()=>{
    axios({
        method:'get',
        url:'https://photo-sharing-api-bootcamp.do.dibimbing.id/api/v1/user',
        headers:{
            apiKey:'c7b411cc-0e7c-4ad1-aa3f-822b00e7734b',
            Authorization:`Bearer ${token}`
        }
    })
    .then(function(response){
        console.log(response.data);
    })
    },[])
    
    return(
<div>

</div>
    )
}
export default User