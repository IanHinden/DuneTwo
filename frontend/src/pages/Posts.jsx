import React, {useEffect, useState} from "react";
import axios from 'axios';
import PostCard from '../components/PostCard'

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
        <div style={{display: "flex", flexWrap: "wrap"}}>
            {posts.map((post) => (
                <PostCard title={post.title}/>
            ))}
        </div>
    </div>
}

export default Posts;