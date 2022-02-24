import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase';



export default function Login() {
    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function signIn(e) {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history('/')
            })
            .catch(error => alert(error.message))
    }

    function register(e) {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth)
                if (auth) {
                    history('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img className='login_logo' src='amazon_logo.png' alt='' />
            </Link>

            <div className='login_container'>
                <h1>Sign-In</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email}
                        onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password}
                        onChange={e => setPassword(e.target.value)} />

                    <button className='login_signInButton'
                        type='submit' onClick={signIn}>Sign In</button>
                </form>

                <p>
                    By Signing-in you agree to AMAZON FAKE CLONE Conditions
                    of Use & Sale. Please see our Privacy Notice,
                    our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button className='login_registerButton'
                    onClick={register}>
                    Create your FAKE Amazon Account
                </button>
            </div>
        </div>
    )
}
