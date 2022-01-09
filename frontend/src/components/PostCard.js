import React, {useState, useEffect, useContext} from "react";
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons"
import { UserContext } from "../UserContext";
import './PostCard.css';

function PostCard(props) {
	const [count, setCount] = useState( props.votes );
    const {user, setUser} = useContext(UserContext);
    const [liked, setLiked] = useState(false)

    useEffect(() => {
        setLiked(props.liked.includes(JSON.parse({user}.user).id))
    }, []);

    const voteUp = (id) => {
        const newVote = {
            postId: id,
        }
        return axios
            .post('http://localhost:5000/vote', newVote, {withCredentials: true})
            .then((res) => {
                if(res.data.Liked){
                    setCount(count + 1);
                    setLiked(true)
                } else {
                    setCount(count - 1);
                    setLiked(false);
                }
            })
            .catch((err) => console.log(err));
    }

	return <div className="card">
			<p>
				{props.title}
			</p>
            <FontAwesomeIcon onClick={() => voteUp(props.postId)} className = {liked ? "likedIcon" : ""} icon={faThumbsUp} /> 
				+ {count}
	</div>
}

export default PostCard;