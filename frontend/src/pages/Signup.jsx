import React, {useState, useContext} from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";
import Footer from "../components/Footer";
import axios from "axios";
import {Button} from 'react-bootstrap';
import './Signup.css';
import config from "../config.json";

function Signup() {
    const navigate = useNavigate();
    const {user} = useContext(UserContext);
    const [errorDisplay, setErrorDisplay] = useState('');
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

    function emailValidation(){
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(regex.test(input.email) === false){
            return false;
        }
        return true;
    }

    const onSubmit = (e) => {
        if(emailValidation() === false) {
            setErrorDisplay("Please enter a valid e-mail address.")
        } else {
        setErrorDisplay("")
        e.preventDefault();

        const userData = {
            email: input.email,
            password: input.password
        };

        axios
            .post(`${config.SERVER_URL}register_login`, userData, {withCredentials: true})
            .then(res => {
                navigate("/confirmation");
                //setUser(JSON.stringify(res.data.user));
            })
            .catch(err => {
                console.log(err);
                console.log(err.response);
            });
        }
    };

    return <div className="container" id="outblog">
        { user ? <div>
            Welcome to the blog! Navigate back home to continue.
        </div>
        : <div className="login">
            <div className="md-form mb-5">
                <input onChange={handleChange} name="email" value={input.email} type="email" id="Form-email1" className="form-control validate"></input>
                <label data-error="wrong" data-success="right" htmlFor="Form-email1">Your email</label>
                <label className="error">{errorDisplay}</label>
              </div>
              <div className="md-form pb-3">
                <input onChange={handleChange} name="password" type="password" value={input.password} id="Form-pass1" className="form-control validate"></input>
                <label data-error="wrong" data-success="right" htmlFor="Form-pass1">Your password</label>
              </div>
              <div className="text-center mb-3">
                <Button className="btn blue-gradient btn-block btn-rounded z-depth-1a" onClick={onSubmit}>Sign Up</Button>
              </div>
        </div>}
        <Footer />
    </div>
}

export default Signup;