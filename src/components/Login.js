import React, { useState } from 'react';
import axios from 'axios'
import {setID, setToken} from  '../helpers/auth'


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

    function openPopup(event){
        if(event.target.value == "login"){
            setPopup("login")
        }else if(event.target.value == "register"){
            setPopup("register")
        }
    }
    
    function handleLogin(data){
        const { token, id } = data
        setToken(token)
        setID(id)
    }

    function handleLoginChange(event){
        const { name, value } = event.target
        setLoginData({
            ...loginData,
            [name]: value
        })
    }

    function handleRegisterChange(event){
        const { name, value } = event.target
        setRegisterData({
            ...registerData,
            [name]: value
        })
    }

    async function handleLoginSubmit(event){
        event.preventDefault()
        console.log(loginData)
        const config = {
            method: "post",
            url: "http://127.0.0.1:8000/api/login",
            header: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(loginData)
        }
        axios.request(config)
        .then((response) => {
          handleLogin(JSON.stringify(response.data))
        })
        .catch((error) => {
          console.log(error);
        });
    }

    async function handleRegisterSubmit(event){
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
            //handleError(err)
        }
    }

    function renderPopup(){
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
                <form onSubmit={handleRegisterSubmit} value="register">
                    <input name="username" type='text' onChange={handleRegisterChange} placeholder='Username'/>
                    <input name="password" type='password' onChange={handleRegisterChange} placeholder='Password'/>
                    <input name="password_confirmation" type='password' onChange={handleRegisterChange} placeholder='Password Confirmation'/>
                    <input type='submit'/>
                </form>
            )
        } 
    }

    return (
        <>
            <button onClick={openPopup} value="login">Login</button>
            <button onClick={openPopup} value="register">Register</button>
            {
                renderPopup()
            }
        </>
    );
}

export default Login;