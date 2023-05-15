import axios from "axios";
import { useEffect, useState } from "react";


const Explore = () => {
    const token = JSON.parse(localStorage.getItem('token'));
    const [data, setData] = useState ([])
    
    useEffect(()=>{
        axios({
            method:'get',
            url:'https://photo-sharing-api-bootcamp.do.dibimbing.id/api/v1/explore-post?size=10&page=1',
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
                <div key={index} className="container  m-5">
                    
                    <div className="text-center"><img className="img m-3" src={item.imageUrl} alt=""/></div>
                    <p className="text-center">{item.caption}</p>
                    <p className="text-center">{item.id}</p>
                    <p className="text-center">{item.updatedAt}</p>
                    <button ></button>
                </div>
            )
        })}
    </div>
)
}
export default Explore