import React, {useContext, useState} from "react";
import {Navbar, Container, Nav} from 'react-bootstrap';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faGithub, faInstagram, faGooglePlus } from "@fortawesome/free-brands-svg-icons"
import Logout from "./Logout";
import LoginModal from "./LoginModal";
import { UserContext } from "../UserContext";
import "./Navbar.css";

function NavbarDiscard() {
    const {user, setUser} = useContext(UserContext);
    const [show, setShow] = useState(false);

    return <div>
        <LoginModal value={{setUser}} show={show} setShow={setShow}/>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Get Me Into Dune 2</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="nav-text nav-link" to="/">Home</Link>
                        <Link className="nav-text nav-link" to="/posts/0">Posts</Link>
                        <Link className="nav-text nav-link" to="/create">Create</Link>
                    </Nav>
                    <Nav className="navbar-nav sm-icons">
                        <li className="nav-item"><a className="nav-link" href="https://twitter.com/orphanshow"><FontAwesomeIcon icon={faTwitter} /></a></li>
                        <li className="nav-item"><a className="nav-link" href="https://github.com/IanHinden"><FontAwesomeIcon icon={faGithub} /></a></li>
                        <li className="nav-item"><a className="nav-link" href="https://instagram.com/IanHinden"><FontAwesomeIcon icon={faInstagram} /></a></li>
                        <li className="nav-item"><a className="nav-link" href="https://instagram.com/IanHinden"><FontAwesomeIcon icon={faGooglePlus} /></a></li>
                    </Nav>
                    <Nav className="navbar-nav mr-auto">
                        <li className="nav-item">
                            {user ? 
                                <Logout /> :
                                <button onClick={() => setShow(true)} type="button" className="btn btn-outline-primary">Login</button>
                            }
                        </li>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
}

export default NavbarDiscard;