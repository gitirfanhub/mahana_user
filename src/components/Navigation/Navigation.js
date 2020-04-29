import React from 'react';
import './Navigation.css';

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) 
    {
      return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <p onClick={() => onRouteChange('login')} className=''>Login</p>
          <p onClick={() => onRouteChange('register')} className=''>Register</p>
        </nav>
      );
    } 
    else 
    {
      return (
        <nav className="nav_font">
          <p onClick={() => onRouteChange('signout')} className="position">Sign Out</p>
        </nav>
      );
    }
}

export default Navigation;