import axios from "axios";
import { useEffect, useState } from "react";
const CreatePost = ()=>{
    const [image, setImage] = useState([])
    const [text, setText] = useState("")
    const [url, setUrl] = useState("")
    const handleImage=(e)=>{
        setImage(e.target.value)
    }
    const handleUrl=(e)=>{
        setUrl(e.target.value)
    }
    const handleText = (e) =>{
        setText(e.target.value)
    }
    const handleSubmit =(e)=>{
        axios({
            method:'post',
            url:'https://photo-sharing-api-bootcamp.do.dibimbing.id/api/v1/create-post',           
            headers:{
                apiKey:'c7b411cc-0e7c-4ad1-aa3f-822b00e7734b',
                Authorization:`Bearer ${token}`
            },
            data:{
                "imageUrl": `${image || url},`,
                "caption": `${text}`
            }
            
        })
        .then(function(response){
            console.log(response);
        })
    }
    const token = JSON.parse(localStorage.getItem('token'));
    // useEffect(()=>{
    //     axios({
    //         method:'post',
    //         url:'https://photo-sharing-api-bootcamp.do.dibimbing.id/api/v1/create-post',           
    //         headers:{
    //             apiKey:'c7b411cc-0e7c-4ad1-aa3f-822b00e7734b',
    //             Authorization:`Bearer ${token}`
    //         },
    //         data:{
    //             "imageUrl": "https://www.masakapahariini.com/wp-content/uploads/2023/03/shutterstock_1949306203.jpg",
    //             "caption": "Pengen ayam"
    //         }
            
    //     })
    //     .then(function(response){
    //         console.log(response);
    //     })
    //     },[])
    return (
        <div className="text-center">
            <input className="create mt-5" value={image} onChange={handleImage} type="file" alt=""/><br/><br/>
            <div className=" d-flex justify-content-center">
            <input className="form-control " value={url} onChange={handleUrl} type="url" placeholder="url" /><br/><br/>
            </div><br/>
            <div className="d-flex justify-content-center">
            <input className="form-control d-flex justify-content-center" value={text} onChange={handleText} type="text"/><br/><br/>
            </div>
            
            <br/>
            <button onClick={handleSubmit} className="btn btn-primary">Upload</button>
        </div>
    )
}
export default CreatePost