import React, {useEffect, useState} from "react";
import axios from 'axios';
//import { getAllPosts } from "../../../controllers/postsController";

function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getAllPosts();
    }, []);

    const getAllPosts = () => {
        return axios
            .get('http://localhost:5000/posts')
            .then((res) => {
                setPosts(res.data);
                console.log(res.data);
                console.log("Got em", posts)
            })
            .catch((err) => console.log(err));
    }

    return <div className="container">
        <h1>Posts</h1>
        <ul>
            {posts.map((post) => (
                <li key={post.title}>
                    title: {post.title}
                    content: {post.content}
                    <hr />
                    <br />
                </li>
            ))}
        </ul>
    </div>
}

export default Posts;