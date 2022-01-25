import React, { useState, useContext, useEffect } from "react";
import {Button} from 'react-bootstrap';
import axios from "axios";
import LoginModal from './LoginModal';
import { UserContext } from "../UserContext";
import './Voting.css';

function Voting(props) {
    const {user, setUser} = useContext(UserContext);
    const [show, setShow] = useState(false);
    const [aLikeStatus, setALikedStatus] = useState(false);
    const [bLikeStatus, setBLikedStatus] = useState(false);
    const [aVotes, setAVotes] = useState();
    const [bVotes, setBVotes] = useState();

    useEffect(() => {
        setAVotes(props.aVotes);
        setBVotes(props.bVotes);

        if({user}.user != null){
            if(props.aLikes){
                setALikedStatus(props.aLikes.includes(JSON.parse({user}.user).id))
            }

            if(props.bLikes){
                setBLikedStatus(props.bLikes.includes(JSON.parse({user}.user).id))
            }
        }
    }, [user, props.aLikes, props.bLikes, props.aVotes, props.bVotes]);

    function vote(option, id) {
        let newPromptVote = {
            choice: option,
            promptId: id,
        };

        return axios
            .post('http://localhost:5000/votePrompt', newPromptVote, {withCredentials: true})
            .then((res) => {
                if(option == 0){
                    setALikedStatus(!aLikeStatus);
                    aLikeStatus ? setAVotes(aVotes - 1) : setAVotes(aVotes + 1);
                    if(bLikeStatus){
                        setBVotes(bVotes - 1);
                        setBLikedStatus(false);
                    }
                } else {
                    setBLikedStatus(!bLikeStatus);
                    bLikeStatus ? setBVotes(bVotes - 1) : setBVotes(bVotes + 1);
                    if(aLikeStatus){
                        setAVotes(aVotes - 1);
                        setALikedStatus(false);
                    }
                }
            })
            .catch((err) => console.log(err));
    }

    return <div>
        <LoginModal value={{setUser}} show={show} setShow={setShow}/>
        <div>
            <h1>Which gets me closer to being in Dune 2?</h1>
            <h2 className="prompt">{props.prompt}</h2>
        </div>
        <div className="d-flex justify-content-evenly">
            <div>
                { user ? 
                <Button variant={aLikeStatus ? "primary" : "secondary"} onClick={() => vote(0, props.promptId)}>
                    {props.aChoice}
                </Button> :
                <Button variant="secondary" onClick={() => setShow(true)}>
                    {props.aChoice}
                </Button> }
                <p className="votes">Votes: {aVotes}</p>
            </div>
            <div>
                { user ?
                <Button variant={bLikeStatus ? "primary" : "secondary"} onClick={() => vote(1, props.promptId)}>
                    {props.bChoice}
                </Button> :
                <Button variant="secondary" onClick={() => setShow(true)}>
                    {props.bChoice}
                </Button> }
                <p className="votes">Votes: {bVotes}</p>
            </div>
        </div>
    </div>
}

export default Voting;
