import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <div className='login'>
            <Link to='/'>
                <img className='login_logo' src='amazon_logo.png' alt='' />
            </Link>

            <div className='login_container'>
                <h1>Sign-In</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' />

                    <h5>Password</h5>
                    <input type='password' />

                    <button className='login_signInButton'
                    >Sign In</button>

                    <p>
                        By Signing-in you agree to AMAZON FAKE CLONE Conditions
                        of Use & Sale. Please see our Privacy Notice,
                        our Cookies Notice and our Interest-Based Ads Notice.
                    </p>

                    <button className='login_registerButton'>
                        Create your FAKE Amazon Account
                    </button>
                </form>
            </div>
        </div>
    )
}
