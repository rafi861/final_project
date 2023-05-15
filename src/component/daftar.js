import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Daftar = () => {
    const  [username, setUsername] = useState('')
    const  [email, setEmail] = useState('')
    const  [password, setPassword] = useState('')
    const changeUserName = (e) => {
        const value = e.target.value;
        setUsername(value)
        console.log(value);
    }
    const changeEmail = (e) => {
        const value = e.target.value;
        setEmail(value)
        console.log(value);
    }
    const changePassword = (e) => {
        const value = e.target.value;
        setPassword(value)
        console.log(value);
    }
    const handleSubmit = (e) =>{
        console.log(username, email, password);
        axios({
            method:'post',
            url:'https://photo-sharing-api-bootcamp.do.dibimbing.id/api/v1/register',
            headers:{
                apiKey:'c7b411cc-0e7c-4ad1-aa3f-822b00e7734b'
            },
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
        <div style={{marginTop:'200px'}}> 
          <div>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <div className="form-group">
                                <label className="mb-2">Username</label>
                                <input type='text' placeholder="Username" className="form-control mb-2" value={username} onChange={changeUserName}/>
                            </div>
                            <div className="form-group">
                                <label className="mb-2">Email</label>
                                <input type='email' placeholder="email" className="form-control" value={email} onChange={changeEmail}/>
                            </div>
                            <div className="form-group">
                                <label className="mb-2 mt-2">Password</label>
                                <input type='password' placeholder="password" className="form-control mb-2" value={password} onChange={changePassword}/>
                            </div>
                            <Link to="/login" className="btn btn-primary" onClick={handleSubmit}>Daftar</Link> {' '}
                            <Link to="/login" className='btn btn-warning ml-4'>Batal</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        </div>
    )
}
    

export default Daftar