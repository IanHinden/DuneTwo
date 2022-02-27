import React, {useContext, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import axios from 'axios';
import { UserContext } from "../UserContext";
import Voting from "../components/Voting";
import './Home.css';
import config from "../config.json";

function Home() {
    const [prompts, setPrompts] = useState([]);
    const [blog, setBlog] = useState({});
    const {user, setUser} = useContext(UserContext);

    useEffect(() => {
        getAllPrompts();
        getLatestBlog();
    }, []);

    const getAllPrompts = () => {
        return axios
            .get(`${config.SERVER_URL}latestPrompt`, {withCredentials: true} )
            .then((res) => {
                setPrompts(res.data);
            })
            .catch((err) => console.log(err));
    }

    const getLatestBlog = () => {
        return axios
            .get(`${config.SERVER_URL}latestBlog`, {withCredentials: true} )
            .then((res) => {
                setBlog(res.data);
            })
            .catch((err) => console.log(err));
    }

    return <div className="container" id="outblog">
        <div className="blog-single gray-bg">
            <div className="container">
                <div className="row align-items-start">
                    <div className="col-lg-8 m-15px-tb">
                        <article className="article">
                            <div className="article-img">
                                <Voting prompt={prompts.prompt} promptId={prompts._id} aChoice={prompts.aChoice} bChoice={prompts.bChoice} aVotes={prompts.aVotes} bVotes={prompts.bVotes} aLikes={prompts.aLikes} bLikes={prompts.bLikes}/>
                                <Link to={`/prompts/${prompts._id}`}>Join Discussion</Link>
                            </div>
                            <div className="article-title">
                                <h2>{blog.title}</h2>
                                <div className="media">
                                    <div className="avatar">
                                        <img src="https://pbs.twimg.com/media/FIuReT9UcAA-Wib?format=jpg&name=medium" title="" alt=""></img>
                                    </div>
                                    <div className="media-body">
                                        <label>Ian Hinden</label>
                                        <span>{blog.createdAt}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="article-content">
                                <div dangerouslySetInnerHTML={{__html: blog.content}}></div>
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

export default Home;