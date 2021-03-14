import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {useState} from 'react'
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from "./components/users/Search";
import Alert from './components/layout/Alert';
import About from './components/layout/About';
import NotFound from './components/layout/NotFound';

import GithubState from './context/github/GithubState';
import AlertState from './context/github/GithubState';
 
import './App.css';

const App = ()=>{
  const [alert,setAlert] = useState(null);

  const showAlert = (msg, type) =>{
    setAlert({msg, type});
    setTimeout(()=>setAlert(null),5000)
  }

  const removeAlert = ()=>{
    setAlert(null);
  }

    return (
      <GithubState>
      <AlertState>
      <Router>
      <div className="App">
        <Navbar/>
        <div className="container">
          <Alert alert={alert} removeAlert={removeAlert} />
          <Switch>
            <Route exact path='/'>
            <Search setAlert={showAlert}/>
              <Users/>
            </Route>
            <Route exact path='/about'>
              <About/>
            </Route>
            <Route exact path='/user/:login'
            render={props =>(
            <User 
              {...props}/>)}>
            </Route>
            <Route component={NotFound}/>
          </Switch>
        </div>
      </div>
      </Router>
      </AlertState>
      </GithubState>
    );
}

export default App;