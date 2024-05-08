import React, { useState } from 'react';
import SignInForm from './UserRegistration';
import LoginForm from './Login';
import './Auth.css'

function Authentication( {handleLoginSuccess}) {
  const [activeForm, setActiveForm] = useState('signIn');

  const toggleForm = (form) => {
    setActiveForm(form);
  };


  return (
    <div className="authentication section">
      <div className="toggle-buttons">
        <button onClick={() => toggleForm('login')} className={activeForm === 'login' ? 'active' : ''}>Login</button>
        <button onClick={() => toggleForm('signIn')} className={activeForm === 'signIn' ? 'active' : ''}>Sign In</button>
      </div>
      <div className="auth-container">
        {activeForm === 'login' ? <LoginForm  handleLoginSuccess/> :<SignInForm  onLoginSuccess={handleLoginSuccess}/> }
      </div>
    </div>
  );
}

export default Authentication;



