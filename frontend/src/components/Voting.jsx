import React, { useState, useContext, useEffect } from "react";
import {Button} from 'react-bootstrap';
import axios from "axios";
import LoginModal from './LoginModal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { UserContext } from "../UserContext";

function Voting(props) {
    const {user, setUser} = useContext(UserContext);
    const [show, setShow] = useState(false);


    useEffect(() => {
        if({user}.user != null){
            //console.log(props.liked.includes(JSON.parse({user}.user).id))
        }
    }, [user]);

    function vote(option) {
        console.log(option);
    }

    return <div>
        <LoginModal value={{setUser}} show={show} setShow={setShow}/>
        <p>{props.prompt}</p>
        <div>
            <Button variant="secondary" onClick={() => vote(0)}>
                {props.aChoice}
            </Button>
            {props.aVotes}
        </div>
        <div>
            <Button variant="secondary" onClick={() => vote(1)}>
                {props.bChoice}
            </Button>
            {props.bVotes}
        </div>
    </div>
}

export default Voting;
