import React, {useState} from "react";

function CreatePost() {
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
        console.log(input);
    }

    return <div className="container">
        <h1>Create Post Page</h1>
        <form>
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

export default CreatePost;