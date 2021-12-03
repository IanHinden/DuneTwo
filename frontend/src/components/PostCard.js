import React, {useState} from "react";
import './PostCard.css';

function PostCard(props) {
	const [count, setCount] = useState(10);

		return <div class="card">
			<p>
				{props.title}
			</p>
			<p>{count}</p>
			<button onClick={() => setCount(count + 1)}>
				+
			</button>
	</div>
}

export default PostCard;