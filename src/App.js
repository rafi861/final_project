import './App.css';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import Navbarr from './component/navbar';
import MyFollowers from './component/follow/MyFollowers';
import Explore from './component/post/explorePost';
import MyFollowing from './component/follow/myFollowing';
import './component/post/explore.css'
import './component/follow/followers.css'
import FollowingUserId from './component/follow/followingByUserId';
import CreatePost from './component/post/createPost';
import LoginUser from './component/authentication/loginUser';
import Daftar from './component/daftar';
import Login from './component/login';
function App() {
  return (
   <div>
    <BrowserRouter>
    <Navbarr/>
    <LoginUser/>
    <Switch>
    <Route component={Explore}path="/" exact/>
    <Route component={MyFollowers} path="/followers"/>
    <Route component={MyFollowing} path="/following"/>
    <Route component={FollowingUserId} path="/FollowingByUserId"/>
    <Route component={CreatePost} path="/createPost"/>
    <Route component={Daftar} path="/daftar"/>
    <Route component={Login} path="/login"/>
    </Switch>
    </BrowserRouter>
   </div>
  );
}

export default App;
