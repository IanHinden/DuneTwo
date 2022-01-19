import React, { useState, useContext, useEffect } from "react";
import {Button, Label} from 'react-bootstrap';
import axios from "axios";
import LoginModal from './LoginModal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { UserContext } from "../UserContext";
import './Voting.css';

function Voting(props) {
    const {user, setUser} = useContext(UserContext);
    const [show, setShow] = useState(false);

    useEffect(() => {
        if({user}.user != null){
            console.log(user);
        }
    }, [user]);

    function vote(option, id) {
        let newPromptVote = {
            choice: option,
            promptId: id,
        };

        return axios
            .post('http://localhost:5000/votePrompt', newPromptVote, {withCredentials: true})
            .then((res) => {
                console.log(res);
            })
            .catch((err) => console.log(err));
    }

    return <div>
        <LoginModal value={{setUser}} show={show} setShow={setShow}/>
        <div>
            <h1>This Week's Prompt:</h1>
            <h2 className="prompt">{props.prompt}</h2>
        </div>
        <div className="d-flex justify-content-evenly">
            <div>
                <Button variant="secondary" onClick={() => vote(0, props.promptId)}>
                    {props.aChoice}
                </Button>
                <p className="votes">Votes: {props.aVotes}</p>
            </div>
            <div>
                <Button variant="secondary" onClick={() => vote(1, props.promptId)}>
                    {props.bChoice}
                </Button>
                <p className="votes">Votes: {props.bVotes}</p>
            </div>
        </div>
    </div>
}

export default Voting;
