import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import axios from 'axios';
import Search from "./components/users/Search";
import Alert from './components/layout/Alert';
import About from './components/layout/About';
import './App.css';

class App extends Component {
  state = {
    users: [],
    user: {},
    loading: false,
    alert: null
  }

  // Search Github Users
  searchUsers = async (text)=>{
    this.setState({loading: true})
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({users: res.data.items, loading: false});
  }
  // Get Single user
  getUser = async (username)=>{
    this.setState({loading: true})
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({user: res.data, loading: false});
  }

  // Clear Github users from state
  clearUsers = ()=>this.setState({users: [], loading: false})

  // Alert component
  setAlert = (msg, type) =>{
    this.setState({alert: {msg, type}})
    setTimeout(()=>this.setState({alert: null}),5000)
  }
  // Clear Alert
  onClick = ()=>{
    this.setState({alert: null})
}

  render(){
    const {users,user,loading} = this.state;

    return (
      <Router>
      <div className="App">
        <Navbar/>
        <div className="container">
          <Alert alert={this.state.alert} onClick={this.onClick}/>
          <Switch>
            <Route exact path='/'>
            <Search searchUsers={this.searchUsers} 
                clearUsers={this.clearUsers} 
                showClear={this.state.users.length >0 ? true: false}
                setAlert={this.setAlert}/>
              <Users 
              loading = {loading} 
              users={users}/>
            </Route>
            <Route path='/about'>
              <About/>
            </Route>
            <Route exact path='/user/:login'>
              <User getUser={this.getUser} user={user} loading={loading}/>
            </Route>
          </Switch>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
