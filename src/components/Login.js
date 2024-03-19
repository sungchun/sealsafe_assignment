import React, { useState } from 'react';
import axios from 'axios'
/*
    This is the login component. It comprises of login and registration forms, and handles
    login and registration requests to the backend.
*/

function Login() {
    const [popup, setPopup] = useState("")
    const [loginData, setLoginData] = useState({
        username: "",
        password: "" 
    })
    const [registerData, setRegisterData] = useState({
        username: "",
        password: "",
        password_confirmation: ""
    })
    const [message, setMessage] = useState("")
    const [loggedIn, setLoggedIn] = useState(false)

    function openPopup(event){
        //Opens register or login form based on button clicked
        if(event.target.value == "login"){
            setPopup("login")
        }else if(event.target.value == "register"){
            setPopup("register")
        }
    }
    
    function handleLoginChange(event){
        //Handles changes to login form information
        const { name, value } = event.target
        setLoginData({
            ...loginData,
            [name]: value
        })
    }

    function handleRegisterChange(event){
        //Handles changes to register form information
        const { name, value } = event.target
        setRegisterData({
            ...registerData,
            [name]: value
        })
    }
    
    async function handleLoginSubmit(event){
        // uses loginData in request body to create POST login request
        const config = {
            method: "post",
            url: "http://127.0.0.1:8000/api/login",
            header: {
                'Content-Type': 'application/json',
            },
            data: loginData
        }
        axios.request(config)
        .then((response) => {
            console.log(response.data);
            setLoggedIn(true)
            setMessage(response.data.message)
        })
        .catch((error) => {
          console.log(error);
        });
    }

    async function handleRegisterSubmit(event){
        // uses registerData in request body to create POST register request
        event.preventDefault()
        console.log(registerData)
        const config = {
            method: "post",
            url: "http://127.0.0.1:8000/api/register",
            data: registerData
        }
        try {
            const response = await axios(config)
        } catch (err) {
            console.log(err);
        }
    }

    function handleClose(){
        //closes login/register popup on button click
        setPopup("")
    }
    
    function handleLogout(){
        //sets loggedIn state to false on button click, brings back login/register buttons
        setLoggedIn(false)
    }

    function renderPopup(){
        //renders login/register popup based on "popup" state
        if(loggedIn){
            return
        }
        if(popup == "login"){
            return (
                <form onSubmit={handleLoginSubmit} value="login">
                    <input name="username" type='text' onChange={handleLoginChange} placeholder='Username'/>
                    <input name="password" type='password' onChange={handleLoginChange} placeholder='Password'/>
                    <input type='submit'/>
                </form>
            )
        }else if(popup == "register"){
            return(
                <div>
                    <form onSubmit={handleRegisterSubmit} value="register">
                        <input name="username" type='text' onChange={handleRegisterChange} placeholder='Username'/>
                        <input name="password" type='password' onChange={handleRegisterChange} placeholder='Password'/>
                        <input name="password_confirmation" type='password' onChange={handleRegisterChange} placeholder='Password Confirmation'/>
                        <input type='submit'/>
                    </form>
                    <button onClick={handleClose}>Close</button>
                </div>
            )
        } 
    }

    return (
        <>
            {
                loggedIn ? (
                    <div>
                        <h4>{message}</h4>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                ):(
                    <div>
                      <button onClick={openPopup} value="login">Login</button>
                      <button onClick={openPopup} value="register">Register</button>
                    </div>
                )
            }
            {
                renderPopup()
            }
        </>
    );
}

export default Login;