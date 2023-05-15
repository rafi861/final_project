import axios from "axios"
import React, { useState } from "react"
const Daftarr = () =>{
    const [username, setUsername] = useState ("")
    const [password, setPassword] = useState ("")
    const [email, setEmail] = useState ("")
const changeUserName = (e) => {
console.log(e);
setUsername(e.target.value)
}
const changePassword = (e) => {
    console.log(e);
    setPassword(e.target.value)
    }
    const changeEmail = (e) => {
        console.log(e);
        setEmail(e.target.value)
        }
const handleSubmit = (e) => {
    console.log(username, password, email);
    axios({
        method:'post',
        url:'https://photo-sharing-api-bootcamp.do.dibimbing.id/api/v1/register',
        
        data:{
            name:username,
            password:password,
            email:email
        }
    }).then(function(response){
        console.log(response.data);
    })
    }
return (
    <div style={{marginTop:'200px'}} className="d-flex justify-content-center">
        
        <form>
            <label>username</label><br/>
            <input type="text" value={username} onChange={changeUserName}/><br/>
            <label>email</label><br/>
            <input type="text" value={email} onChange={changeEmail}/><br/>
            <label>password</label><br/>
            <input type="password" value={password} onChange={changePassword}/><br/><br/>
            <input type="submit" value="submit" onClick={handleSubmit}/><br/>
        </form>
    </div>
)
}
export default Daftarr