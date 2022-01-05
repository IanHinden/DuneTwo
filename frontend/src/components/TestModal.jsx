import React, { useState, useContext } from "react";
import {Modal, Button} from 'react-bootstrap';
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faGithub, faInstagram, faFacebook} from "@fortawesome/free-brands-svg-icons"
import { UserContext } from "../UserContext";

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
        console.log(userData);
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
            <input onChange={handleChange} name="email" value={input.email} type="email" id="Form-email1" className="form-control validate"></input>
            <label data-error="wrong" data-success="right" htmlFor="Form-email1">Your email</label>
            <input onChange={handleChange} name="password" type="password" value={input.password} id="Form-pass1" className="form-control validate"></input>
            <label data-error="wrong" data-success="right" htmlFor="Form-pass1">Your password</label>
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