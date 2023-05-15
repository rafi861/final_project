import React from "react"
import { useState } from "react"
import axios from "axios"
const Loginn = () => {
    const [username, setUsername] = useState ("")
    const [password, setPassword] = useState ("")
    const changeUserName = (e) => {
        console.log(e);
        setUsername(e.target.value)
        }
        const changePassword = (e) => {
            console.log(e);
            setPassword(e.target.value)
            }
            const handleSubmit = (e) => {
                console.log(username, password, );
                axios({
                    method:'post',
                    url:'https://photo-sharing-api-bootcamp.do.dibimbing.id/api/v1/login',
                    
                    data:{
                        name:username,
                        password:password,
                        
                    }
                }).then(function(response){
                    console.log(response.data);
                })
                }
    return (
        <div>
            <label >Username</label>
            <input value={username} onChange={changeUserName} type="text" />
            <label>Password</label>
            <input type="password" value={password} onChange={changePassword}/>
            <input type="submit" value="submit" onClick={handleSubmit}/>
        </div>
    )
}
export default Loginn 