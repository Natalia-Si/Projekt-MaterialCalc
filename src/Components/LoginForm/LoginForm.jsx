import React, {useState} from "react";


import "./LoginForm.css"
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.js"
import {useNavigate} from "react-router-dom";

export default function LoginForm() {

    const [error, setError] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                // console.log(user)
                navigate("/")
            })
            .catch((error) => {
                setError(true)
            });

    }

    return (
        <div className="formContainer">
            <form className="form" onSubmit={handleLogin}>
                <h2 className="form-title">Zaloguj się</h2>
                <div className="input-email">
                    <label htmlFor="email"></label>
                    <input id="email" type="email"  placeholder="Login" onChange={e=>setEmail(e.target.value)}/>
                </div>
                <div className="input-password">
                    <label htmlFor="inputPassword"></label>
                    <input id="password" type="password"  placeholder="Hasło" onChange={e=>setPassword(e.target.value)} />
                </div>
                <div className="button-container">
                    <button type="submit">Zaloguj się</button>
                </div>
                {error && <span className="warning-msg">Zły email lub hasło</span>}
            </form>
        </div>

    )
}