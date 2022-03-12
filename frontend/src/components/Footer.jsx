import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {Link} from "react-router-dom";
import { faTwitter, faGithub, faInstagram, faGooglePlus, faTiktok } from "@fortawesome/free-brands-svg-icons"
import "./Footer.css";

function Footer() {
    return <div className="mt-5 pt-5 pb-5 footer">
    <div className="container">
    <div className="row">
        <div className="col-lg-5 col-xs-12 about-company">
        <h2>Get Me Into Dune 2</h2>
        <p className="pr-5 text-white-50">I have social media. I am part of the problem.</p>
            <a className="socialicon" href="https://twitter.com/orphanshow"><FontAwesomeIcon icon={faTwitter} /></a>
            <a className="socialicon" href="https://github.com/IanHinden"><FontAwesomeIcon icon={faGithub} /></a>
            <a className="socialicon" href="https://instagram.com/IanHinden"><FontAwesomeIcon icon={faInstagram} /></a>
            <a className="socialicon" href="https://instagram.com/IanHinden"><FontAwesomeIcon icon={faGooglePlus} /></a>
            <a className="socialicon" href="https://tiktok.com/@HateFilledBox"><FontAwesomeIcon icon={faTiktok} /></a>
        </div>
        <div className="col-lg-3 col-xs-12 links">
        <h4 className="mt-lg-0 mt-sm-3">Other Things I Made</h4>
            <ul className="m-0 p-0">
            <li><a href="http://thegarbage.org">The Garbage</a></li>
            <li><a href="http://www.pyramidschemecosmetics.com">Pyramid Scheme Cosmetics</a></li>
            <li>Terrible, horrible mistakes. :(</li>
            </ul>
        </div>
        <div className="col-lg-3 col-xs-12 links">
        <h4 className="mt-lg-0 mt-sm-3">Legal</h4>
            <ul className="m-0 p-0">
            <li><Link to="/termsofservice">Terms of Service</Link></li>
            <li><Link to="/privacypolicy">Privacy Policy</Link></li>
            </ul>
        </div>
    </div>
    <div className="row mt-5">
        <div className="col copyright">
        <p className=""><small className="text-white-50">© 2021. All Rights Reserved.</small></p>
        </div>
    </div>
    </div>
</div>
}

export default Footer;
