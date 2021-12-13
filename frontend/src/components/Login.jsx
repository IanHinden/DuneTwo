import React, { useState } from "react";
import axios from "axios";

function SignUpLoginForm() {
    const [input, setInput] = useState({
        email: '',
        password: ''
    })

    function handleChange(event) {
        const {name, value} = event.target;

        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    const onSubmit = e => {
        e.preventDefault();

        const userData = {
            email: input.email,
            password: input.password
        };
        console.log(userData);
        axios
            .post("http://localhost:5000/register_login", userData)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
                console.log(err.response);
            });
    };

    return <div className="container">
    <h1>Login</h1>
    <form>
        <div className='form-group'>
            <input onChange={handleChange} name="email" value={input.email} autoComplete="off" className='form-control' placeholder="Email"></input>
        </div>

        <div className='form-group'>
            <input onChange={handleChange} name="password" type="password" value={input.password} autoComplete="off" className='form-control' placeholder="Password"></input>
        </div>

        <button onClick={onSubmit} className="btn btn-lg btn-info">Add Post</button>
    </form>
    </div>
}

export default SignUpLoginForm;