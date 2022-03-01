import React, {useState} from "react";
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons"
import './SubmitEditCard.css';

function PostCard(props) {
    const [editMode, setEditMode] = useState(props.editMode);
	const [count] = useState( props.votes );
    const [title, setTitle] = useState( props.title);
    const [input, setInput] = useState({
        title: '',
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
            title: input.title,
            content: input.content,
        }

        return axios.post('http://localhost:5000/createPost', newNote, { withCredentials: true })
        .then((res) => {
            setEditMode(true);
            setTitle(input.title);
        })
        .catch((err) => console.log(err));
    }

	return <div className="submiteditcard">
        { editMode ? <div>
            <p>
                {title}
            </p>
            <FontAwesomeIcon icon={faThumbsUp} />
            {props.votes > 0 ? + {count} : null}
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
                    <input onChange={handleChange} name="title" value={input.title} autoComplete="off" className='form-control' placeholder="Post Title"></input>
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