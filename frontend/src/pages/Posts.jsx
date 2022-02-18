import React, {useEffect, useState, useContext} from "react";
import axios from 'axios';
import PostCard from '../components/PostCard'
import { UserContext } from "../UserContext";
import config from "../config.json";
import { useParams } from "react-router-dom";

function Posts() {
    const { id } = useParams();
    const [posts, setPosts] = useState([]);
    const [prompt, setPrompt] = useState([]);
    const {user} = useContext(UserContext);

    useEffect(() => {
        getAllPosts();
        getPrompt({id}.id);
    }, [id]);

    const getAllPosts = () => {
        return axios
            .get(`${config.SERVER_URL}posts`, {
                    withCredentials: true
                },
            )
            .then((res) => {
                setPosts(res.data);
            })
            .catch((err) => console.log(err));
    }

    const getPrompt = (id) => {
        if(id != "0"){
        return axios
            .get(`${config.SERVER_URL}prompt/${id}`, { withCredentials: true })
            .then((res) => {
                setPrompt(res.data);
            })
            .catch((err) => console.log(err));
        } else {
            return axios
            .get(`${config.SERVER_URL}latestPrompt`, { withCredentials: true })
            .then((res) => {
                setPrompt(res.data);
            })
            .catch((err) => console.log(err));
        }
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