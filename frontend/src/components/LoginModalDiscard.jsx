import React, { useState, useContext } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faGithub, faInstagram, faFacebook} from "@fortawesome/free-brands-svg-icons"
import { UserContext } from "../UserContext";
import "./LoginModal.css";

function LoginModal() {
    const {setUser} = useContext(UserContext);
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
            .post("http://localhost:5000/register_login", userData, {withCredentials: true})
            .then(res => {
                console.log(res);
                setUser(JSON.stringify(res.data.user));
            })
            .catch(err => {
                console.log(err);
                console.log(err.response);
            });
    };

    return <div className="modal fade" id="elegantModalForm" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content form-elegant">
                <div className="modal-header text-center">
                    <h3 className="modal-title w-100 dark-grey-text font-weight-bold my-3" id="myModalLabel"><strong>Sign in</strong></h3>
                    <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body mx-4">
                    <div className="md-form mb-5">
                    <input onChange={handleChange} name="email" value={input.email} type="email" id="Form-email1" className="form-control validate"></input>
                    <label data-error="wrong" data-success="right" htmlFor="Form-email1">Your email</label>
                    </div>

                    <div className="md-form pb-3">
                    <input onChange={handleChange} name="password" type="password" value={input.password} id="Form-pass1" className="form-control validate"></input>
                    <label data-error="wrong" data-success="right" htmlFor="Form-pass1">Your password</label>
                    <p className="font-small blue-text d-flex justify-content-end">Forgot <a href="www.forgot.com" className="blue-text ml-1">
                        Password?</a></p>
                    </div>

                    <div className="text-center mb-3">
                    <button type="button" onClick={onSubmit} className="btn blue-gradient btn-block btn-rounded z-depth-1a">Sign in</button>
                    </div>
                    <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2"> or Sign in
                    with:</p>

                    <div className="row my-3 d-flex justify-content-center">
                    <button type="button" className="btn btn-white btn-rounded mr-md-3 z-depth-1a"><FontAwesomeIcon className="fab fa-facebook-f text-center" icon={faFacebook} /></button>
                    <button type="button" className="btn btn-white btn-rounded mr-md-3 z-depth-1a"><FontAwesomeIcon className="fab fa-twitter" icon={faTwitter} /></button>
                    <button type="button" className="btn btn-white btn-rounded z-depth-1a"><FontAwesomeIcon className="fab fa-facebook-f text-center" icon={faInstagram} /></button>
                    </div>
                </div>
                <div className="modal-footer mx-5 pt-3 mb-1">
                    <p className="font-small grey-text d-flex justify-content-end">Not a member? <a href="http://www.signup.com" className="blue-text ml-1">
                        Sign Up</a></p>
                </div>
            </div>
        </div>
    </div>
}

export default LoginModal;