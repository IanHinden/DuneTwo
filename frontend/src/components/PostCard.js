import React, {useState} from "react";
import axios from 'axios';
import './PostCard.css';

function PostCard(props) {
	const [count, setCount] = useState( props.votes );

    const voteUp = (id) => {
        const newVote = {
            postId: id,
        }
        return axios
            .post('http://localhost:5000/vote', newVote)
            .then((res) => {
                setCount(count + 1);
            })
            .catch((err) => console.log(err));
    }

	return <div className="card">
			<p>
				{props.title}
			</p>
			<button onClick={() => voteUp(props.postId)}>
				+ {count}
			</button>
	</div>
}

export default PostCard;