import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Login() {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [hasError, setHasError] = useState(false);




  const login = ( ) => {
    const loginPayload = { 
      email: emailValue, 
      password: passwordValue
    };

    axios.post('/api/login', loginPayload)
      .then((res) => {
        sessionStorage.setItem('email', emailValue);
        sessionStorage.setItem('loggedIn', res.isMatch);
        window.location.href = '/dashboard';
      })
      .catch(e => {
        setHasError(true);
      });
  };

  return (
    <div id='login-page'>
      <div className='form-group' id='login-form'>
        <p>Email</p>
        <input className="form-control login-input" type='text' onChange={(e) => setEmailValue(e.target.value)}/>
        <p>Password</p>
        <input className="form-control login-input" type='password' onChange={(e) => setPasswordValue(e.target.value)}/>
      </div>
      <button
        className='btn btn-primary'
        id='loginButton'
        type='submit'
        onClick={login}>
        Log In
      </button>
      {hasError && <p>Invalid Email or Password</p>}
      <p>
        Dont have an account? Click{' '}
        <Link id='signUp-link' to={'/signup'}>
          here
        </Link>{' '}
        to sign up!
      </p>
    </div>
  );
}

export default Login;
