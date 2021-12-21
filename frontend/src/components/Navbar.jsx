import React from "react";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons"
import "./Navbar.css";

function Navbar() {
    return <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
        <div className="container">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
                </ul>
            </div>
        </div>
    </nav>
}

export default Navbar;