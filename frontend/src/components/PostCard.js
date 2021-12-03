import React, {useState} from "react";
import './PostCard.css';

function PostCard(props) {
	const [count, setCount] = useState( props.votes );

		return <div className="card">
			<p>
				{props.title}
			</p>
			<button onClick={() => setCount(count + 1)}>
				+ {count}
			</button>
	</div>
}

export default PostCard;