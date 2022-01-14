import React, { useState, useContext } from "react";
import {Modal, Button} from 'react-bootstrap';
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faInstagram, faFacebook} from "@fortawesome/free-brands-svg-icons"
import { UserContext } from "../UserContext";
import "./LoginModal.css";

export default function InfoModal(props) {
    const {setUser} = useContext(UserContext);
    const handleClose = () => props.setShow(false);

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

        axios
            .post("http://localhost:5000/register_login", userData, {withCredentials: true})
            .then(res => {
                setUser(JSON.stringify(res.data.user));
                handleClose();
            })
            .catch(err => {
                console.log(err);
                console.log(err.response);
            });
    };

    return (
      <>  
        <Modal show={props.show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
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
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={onSubmit}>
                Sign In
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }