import React from "react";


import "./LoginForm.css"


export default function LoginForm() {

    return (
        <div className="formContainer">
            <form className="form" >
                <h2 className="form-title">Zaloguj się</h2>
                <div className="input-email">
                    <label htmlFor="emial"></label>
                    <input id="email" type="email" name="email" placeholder="Login" required/>
                </div>
                <div className="input-password">
                    <label htmlFor="inputPassword"></label>
                    <input id="password" type="password" name="password" placeholder="Hasło" required />
                </div>
                <div className="button-container">
                    <button>Zaloguj się</button>
                </div>
            </form>
        </div>

    )
}