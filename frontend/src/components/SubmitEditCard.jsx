import React, {useState, useEffect, useContext} from "react";
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons"
import './PostCard.css';

function PostCard(props) {
    const [editMode, setEditMode] = useState(props.editMode);
	const [count, setCount] = useState( props.votes );

    useEffect(() => {
    }, []);

	return <div className="card">
        { editMode ? <div>
            <p>
                {props.title}
            </p>
            <FontAwesomeIcon icon={faThumbsUp} />
            {props.votes > 0 ? + {count} : null}
        </div>
        :
        <div>
            Create post logic here
            <FontAwesomeIcon onClick={() => setEditMode(true)} icon={faThumbsUp} />
        </div>
        }
	</div>
}

export default PostCard;