import React, {useEffect, useState, useContext} from "react";
import axios from 'axios';
import PostCard from '../components/PostCard'
import { UserContext } from "../UserContext";
import config from "../config.json";
import { useParams } from "react-router-dom";

function Prompts() {
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
        if(id !== "0"){
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
        <div className="blog-single gray-bg">
            <div className="container">
                <div className="row align-items-start">
                    <div className="col-lg-8 m-15px-tb">
                        <article className="article">
                            <div className="container">
                                <h1>Prompt!</h1>
                                {user}
                                <h2>{prompt.prompt}</h2>
                                <div className="row">
                                    <div className="col">
                                        <h3>{prompt.aChoice}</h3>
                                        {posts.map((post) => (
                                            post.support === "a" ? <PostCard key={post.title} postId={post._id} title={post.title} votes={post.votes} liked={post.likes}/> : null
                                        ))}
                                    </div>
                                    <div className="col">
                                        <h3>{prompt.bChoice}</h3>
                                        {posts.map((post) => (
                                            post.support === "b" ? <PostCard key={post.title} postId={post._id} title={post.title} votes={post.votes} liked={post.likes}/> : null
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div className="col-lg-4 m-15px-tb blog-aside">
                        <div className="widget widget-author">
                            <div className="widget-title">
                                <h3>Author</h3>
                            </div>
                            <div className="widget-body">
                                <div className="media align-items-center">
                                    <div className="avatar">
                                        <img src="https://pbs.twimg.com/media/FIuReT9UcAA-Wib?format=jpg&name=medium" title="" alt=""></img>
                                    </div>
                                    <div className="media-body">
                                        <h6>About Ian Hinden</h6>
                                    </div>
                                </div>
                                <p>Ian Hinden is (possibly) an actor in the forthcoming (maybe) critically-acclaimed Dune 2.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Prompts;