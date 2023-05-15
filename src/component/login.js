import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom'
import axios from "axios";
const Login = () => {
    const [username, setUsername] = useState  ('');
    const [password, setPassword] = useState  ('');
    const onChangeUsername = (e) => {
        const value = e.target.value;
        setUsername (value)
    }
    const onChangePassword = (e) => {
        const value = e.target.value
        setPassword(value)
    }
    const handleSubmit = (e) => {
        console.log(username, password, );
        axios({
            method:'post',
            url:'https://photo-sharing-api-bootcamp.do.dibimbing.id/api/v1/login',
            headers:{
                apiKey: 'c7b411cc-0e7c-4ad1-aa3f-822b00e7734b'
            },
            data:{
                name:username,
                password:password               
            }
        }).then(function(response){
            console.log(response.data);
        })
        }
    return (
    <div>
        <div className="" style={{marginTop:'200px'}}>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card p-4">
                        <div className="card-body">
                            <div className="form-group">
                                <label className="mb-2">email</label>
                                <input type="email" placeholder="email" className="form-control mb-2" value={username} onChange={onChangeUsername}/>
                            </div>
                            <div className="form-group ">
                                <label className="mb-2">Password</label>
                                <input type="password" placeholder="Password" className="form-control" value={password} onChange={onChangePassword}/>
                            </div>
                            <Link to="/" className="btn btn-primary mt-4" onClick={handleSubmit}>login</Link>
                            <Link to="/daftar" className='d-flex justify-content-center'>Halaman Daftar</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        
    )
}
export default Login