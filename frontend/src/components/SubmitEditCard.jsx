import React, {useState} from "react";
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons"
import config from "../config.json";
import './SubmitEditCard.css';

function PostCard(props) {
    let [content, setContent] = useState('');
    const [editMode, setEditMode] = useState(props.editMode);
	const [count] = useState(props.votes);
    const [input, setInput] = useState({
        content: ''
    })

    function handleChange(event) {
        const {name, value} = event.target;

        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    function handleClick(event) {
        event.preventDefault();
        const newNote = {
            support: input.support,
            content: input.content,
        }

        return axios.post(`${config.SERVER_URL}createPost`, newNote, { withCredentials: true })
        .then((res) => {
            setEditMode(true);
            setContent(input.content);
        })
        .catch((err) => console.log(err));
    }

	return <div className="submiteditcard">
        { editMode ? <div>
            <p>
                {content}
            </p>
            <FontAwesomeIcon icon={faThumbsUp} />
            + {count}
        </div>
        :
        <div>
            <form>
                <div className="radio-buttons">
                    {props.optionA}
                    <input
                        id="a"
                        value="a"
                        name="support"
                        type="radio"
                        onChange={handleChange}
                    />
                    {props.optionB}
                    <input
                        id="b"
                        value="b"
                        name="support"
                        type="radio"
                        onChange={handleChange}
                    />
                </div>
                <div className='form-group'>
                    <textarea onChange={handleChange} name="content" value={input.content} autoComplete="off" className='form-control' placeholder="Post Content"></textarea>
                </div>

                <button onClick={handleClick} className="btn btn-lg btn-info">Add Post</button>
            </form>
        </div>
        }
	</div>
}

export default PostCard;