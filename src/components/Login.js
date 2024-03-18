import React, { useState } from 'react';

function Login() {
    const [popup, setPopup] = useState("")
    const [loginData, setLoginData] = useState({
        "username": "",
        "password": "" 
    })
    const [registerData, setRegisterData] = useState({
        "username": "",
        "password": "",
        "password_confirmation": ""
    })

    function openPopup(event){
        if(event.target.value == "login"){
            setPopup("login")
        }else if(event.target.value == "register"){
            setPopup("register")
        }
    }

    function renderPopup(){
        if(popup == "login"){
            return (
                <form>
                    <input type='text'/>
                    <input type='text'/>
                </form>
            )
        }else if(popup == "register"){
            return(
                <form>
                    <input type='text'/>
                    <input type='text'/>
                    <input type='text'/>
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