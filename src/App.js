import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import {
  Link,
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Home from './screens/home'
import NewUser from './screens/new'


function App() {
  return (
    <Router>
    

    <nav className="navbar navbar-expand navbar-light bg-light">
          <Link to={"/home"} className="navbar-brand">
              DESELECT APP
          </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/home"} className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/new"} className="nav-link">
              Add
            </Link>
          </li>
        </div>
      </nav>
      <div className="container mt-3">
    <Switch>
    <Route exact path="/home" component={Home} />
    <Route exact path="/new" component={NewUser} />
    <Route exact path="/" render={()=>{
       return(
        <Redirect to="/home" />
       )
    }} />
    </Switch>
    </div>
</Router>
  );
}

export default App;
