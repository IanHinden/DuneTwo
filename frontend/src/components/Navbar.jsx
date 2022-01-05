import React, {useContext, useState} from "react";
import { UserContext } from "../UserContext";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faGithub, faInstagram, faGooglePlus } from "@fortawesome/free-brands-svg-icons"
import Logout from "./Logout";
import LoginModal from "./LoginModal";
import "./Navbar.css";

function Navbar() {
    const {user, setUser} = useContext(UserContext);
    const [show, setShow] = useState(false);

    return <div>
        <LoginModal value={{setUser}} show={show} setShow={setShow}/>
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <span className="navbar-text">Help Me Get Into Dune 2</span>
                        </li>
                    </ul>
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/posts">Posts</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/create">Create</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav sm-icons">
                        <li className="nav-item"><a className="nav-link" href="https://twitter..com/orphanshow"><FontAwesomeIcon icon={faTwitter} /></a></li>
                        <li className="nav-item"><a className="nav-link" href="https://github.com/IanHinden"><FontAwesomeIcon icon={faGithub} /></a></li>
                        <li className="nav-item"><a className="nav-link" href="https://instagram.com/IanHinden"><FontAwesomeIcon icon={faInstagram} /></a></li>
                        <li className="nav-item"><a className="nav-link" href="https://instagram.com/IanHinden"><FontAwesomeIcon icon={faGooglePlus} /></a></li>
                    </ul>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            {user ? 
                                <Logout /> :
                                <button onClick={() => setShow(true)} type="button" className="btn btn-outline-primary">Login</button>
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
}

export default Navbar;