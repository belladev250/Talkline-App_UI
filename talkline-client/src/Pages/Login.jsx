import React from 'react';
import "../index.css"

export default function Login(){


    return(
      <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo text-green-500 text-4xl font-Pacifico text-white cursor-pointer">Talkline</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Talkline.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton bg-green-500 ">
              Create a New Account
            </button>
          </div>
        </div>
      </div>
    </div>
    )
}