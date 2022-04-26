import React from 'react';
import "../index.css"

export default function Register(){


    return(
      <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo text-green-500 text-4xl font-Pacifico text-white cursor-pointer">Talkline</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Talkline.
          </span>
        </div>
        <div className="loginRight ">
          <div className="RegBox bg-white flex flex-col space-y-4">
            <input placeholder="Username" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput"/>
            <button className="loginButton">Register</button>
            <span className="loginForgot">Already have an Account ?</span>
            <button className="loginRegisterButton bg-green-500 ">
              Log In 
            </button>
          </div>
        </div>
      </div>
    </div>
    )
}