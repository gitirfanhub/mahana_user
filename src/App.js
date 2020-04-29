import React, { Component } from 'react';
// import Admin from './components/Admin/Admin';
import Login from './components/Login/Login';
import User from './components/User/User';
import Register from './components/Register/Register';
import Navigation from './components/Navigation/Navigation';
import './App.css';

const initialState = {
  route: 'login',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  }
}

class App extends Component {
  constructor() 
  {
    super();
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState(
      {  
        user: 
        {
          id: data.id,
          name: data.name,
          email: data.email,
          entries: data.entries,
          joined: data.joined
        }
      })
  }

  onRouteChange = (route) => {
      if (route === 'signout') {
          this.setState(initialState)
      } 
      else 
      if (route === 'admin') {
          this.setState({route: route});
      }
      this.setState({route: route});
    }

  render() 
  {
    const { isSignedIn, route } = this.state;
    return(
      <div className="">
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
          { 
            route === 'admin'
              ? 
                <User onRouteChange={this.onRouteChange}/>
              : 
              (
                 route === 'login'
                 ? 
                    <Login loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
                 : 
                    <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
              )
          }
      </div>
    );
  }
}

export default App;
