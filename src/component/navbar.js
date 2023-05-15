import React from "react";
import { Link} from 'react-router-dom'
const Navbarr = () => {
    
return (
    <div className="mt-3 border p-2" >
    <Link to="/" className="home m-4 text-white" >home</Link>
    <Link to="/followers" className="home m-3 text-white">followers</Link>
    <Link to="/following" className="home m-3 text-white">following</Link>
    <Link to="/FollowingByUserId" className="home m-3 text-white">Following By User Id</Link>
    <Link to="/createPost" className="home m-3 text-white">Create Post</Link>
    <Link to="/daftar" className="home m-3 text-white">Daftar</Link>
    <Link to="/login" className="home m-3 text-white">Login</Link>
    </div>
    
)
}

export default Navbarr