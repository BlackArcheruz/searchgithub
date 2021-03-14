import {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import axios from 'axios';
import Search from "./components/users/Search";
import Alert from './components/layout/Alert';
import About from './components/layout/About';

import GithubState from './context/github/GithubState';
 
import './App.css';

const App = ()=>{

  const [users,setUsers] = useState([]);
  const [user,setUser] = useState({});
  const [repos,setRepos] = useState([]);
  const [loading,setLoading] = useState(false);
  const [alert,setAlert] = useState(null);

  // Search Github Users
  const searchUsers = async (text)=>{
    setLoading(true);
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    setUsers(res.data.items);
    setLoading(false);
  }
  // Get Single user
  const getUser = async (username)=>{
    setLoading(true);
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    setUser(res.data);
    setLoading(false);
  }

  // get single repos
  const getUserRepos = async (username)=>{
    setLoading(true);
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    setRepos(res.data);
    setLoading(false);
  }
  // Clear Github users from state
  const clearUsers = ()=>{
    setUsers([]);
    setLoading(false);
  }

  // Alert component
  const showAlert = (msg, type) =>{
    setAlert({msg, type});
    setTimeout(()=>setAlert(null),5000)
  }

  const nullAlert = ()=>{
    setAlert(null);
  }
    return (
      <GithubState>
      <Router>
      <div className="App">
        <Navbar/>
        <div className="container">
          <Alert alert={alert}
          onClick={nullAlert}
          />
          <Switch>
            <Route exact path='/'>
            <Search searchUsers={searchUsers} 
                clearUsers={clearUsers} 
                showClear={users.length >0 ? true: false}
                setAlert={showAlert}/>
              <Users 
              loading = {loading} 
              users={users}/>
            </Route>
            <Route path='/about'>
              <About/>
            </Route>
            <Route exact path='/user/:login'
            render={props =>(
            <User 
              {...props}
              getUser={getUser}
              getUserRepos={getUserRepos}
              user={user}
              repos={repos}
              loading={loading}/>)}>
            </Route>
          </Switch>
        </div>
      </div>
      </Router>
      </GithubState>
    );
}

export default App;