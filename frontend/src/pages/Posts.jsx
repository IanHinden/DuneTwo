import React, {useEffect, useState, useContext} from "react";
import axios from 'axios';
import PostCard from '../components/PostCard'
import { UserContext } from "../UserContext";

function Posts() {
    const [posts, setPosts] = useState([]);
    const {user} = useContext(UserContext);

    useEffect(() => {
        getAllPosts();
    }, []);

    const getAllPosts = () => {
        return axios
            .get('http://localhost:5000/posts', {
                    withCredentials: true
                },
            )
            .then((res) => {
                setPosts(res.data);
            })
            .catch((err) => console.log(err));
    }

    return <div className="container">
        <h1>Posts</h1>
        <div style={{display: "flex", flexWrap: "wrap"}}>
            {posts.map((post) => (
                <PostCard key={post.title} postId={post._id} title={post.title} votes={post.votes} liked={post.likes}/>
            ))}
        </div>
    </div>
}

export default Posts;