import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {Modal, Button} from 'react-bootstrap';
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter/*, faInstagram, faFacebook*/} from "@fortawesome/free-brands-svg-icons"
import { UserContext } from "../UserContext";
import "./LoginModal.css";
import config from "../config.json";

export default function InfoModal(props) {
  const navigate = useNavigate();
    const {setUser} = useContext(UserContext);
    const handleClose = () => props.setShow(false);
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
        setErrorDisplay("");
        e.preventDefault();

        const userData = {
            email: input.email,
            password: input.password
        };

        axios
            .post(`${config.SERVER_URL}register_login`, userData, {withCredentials: true})
            .then(res => {
              if(res.data.user.verified){
                setUser(JSON.stringify(res.data.user));
                handleClose();
              } else {
                handleClose();
                navigate("/confirmation");
              }
            })
            .catch(err => {
                console.log(err);
                console.log(err.response);
            });
      }
    };

    return (
      <>  
        <Modal show={props.show} onHide={handleClose}>
          <div className="modal-content form-elegant">
            <Modal.Header className="modal-header text-center" closeButton>
              <Modal.Title className="modal-title w-100 dark-grey-text font-weight-bold my-3"><strong>Login</strong></Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-body mx-4">
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
                <Button className="btn blue-gradient btn-block btn-rounded z-depth-1a" onClick={onSubmit}>Sign in</Button>
              </div>
              <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2"> or Sign in
              with:</p>
              <div className="row my-3 d-flex justify-content-around">
                <a href={`${config.SERVER_URL}auth/twitter`} className="btn btn-white btn-rounded mr-md-3 z-depth-1a"><FontAwesomeIcon className="fab fa-twitter" icon={faTwitter} /></a>
              </div>
            </Modal.Body>
            <Modal.Footer>
            <p className="font-small grey-text d-flex justify-content-end">Not a member? <a href="/signup" className="blue-text ml-1">
              Sign Up</a></p>
            </Modal.Footer>
          </div>
        </Modal>
      </>
    );
  }