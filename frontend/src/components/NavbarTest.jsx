import React, {useContext, useState} from "react";
import {Navbar, Container, Nav} from 'react-bootstrap';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faGithub, faInstagram, faGooglePlus } from "@fortawesome/free-brands-svg-icons"
import LoginModal from "./LoginModal";
import { UserContext } from "../UserContext";

function NavbarTest() {
    const {user, setUser} = useContext(UserContext);
    const [show, setShow] = useState(false);

    return <div>
        <LoginModal value={{setUser}} show={show} setShow={setShow}/>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Help Me Get Into Dune 2</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/"><Nav.Link href="/">Home</Nav.Link></Link>
                        <Link to="/posts"><Nav.Link href="posts">Posts</Nav.Link></Link>
                        <Link to="/create"><Nav.Link href="create">Create</Nav.Link></Link>
                    </Nav>
                    <Nav>
                    <Nav.Link href="#deets">More deets</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        Dank memes
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
}

export default NavbarTest;