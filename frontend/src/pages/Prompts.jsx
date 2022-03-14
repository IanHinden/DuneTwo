import React, {useEffect, useState, useContext} from "react";
import axios from 'axios';
import PostCard from '../components/PostCard';
import SubmitEditCard from '../components/SubmitEditCard';
import Footer from "../components/Footer";
import { UserContext } from "../UserContext";
import config from "../config.json";
import LoginModal from "../components/LoginModal";
import { useParams } from "react-router-dom";

function Prompts() {
    const { id } = useParams();
    const [userPost, setUserPost] = useState([]);
    const [aPosts, setAPosts] = useState([]);
    const [bPosts, setBPosts] = useState([]);
    const [prompt, setPrompt] = useState([]);
    const [show, setShow] = useState(false);
    const {user, setUser} = useContext(UserContext);

    useEffect(() => {
        getAllPosts(user);
        getPrompt({id}.id);
    }, [id, user]);

    const getAllPosts = (user) => {
        return axios
            .get(`${config.SERVER_URL}posts`, {
                    withCredentials: true
                },
            )
            .then((res) => {
                const userPost = [];
                const aPosts = [];
                const bPosts = [];

                res.data.forEach(post => {
                    if(post.userId === user){
                        userPost.push(post);
                        return;
                    } else {
                        if(post.support === "a"){
                            aPosts.push(post);
                        } else {
                            bPosts.push(post);
                        }
                    }
                })

                setUserPost(userPost);
                setAPosts(aPosts);
                setBPosts(bPosts);
            })
            .catch((err) => console.log(err));
    }

    const getPrompt = (id) => {
        if(id !== "0"){
        return axios
            .get(`${config.SERVER_URL}prompt/${id}`, { withCredentials: true })
            .then((res) => {
                setPrompt(res.data.Data);
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
            <div className="container" id="outblog">
                <div className="row align-items-start">
                    <div className="col-lg-8 m-15px-tb">
                        <article className="article">
                            <div className="container">
                                <h1>Prompt!</h1>
                                <h2>{prompt.prompt}</h2>
                                {user ? 
                                <div><p>Your Answer: </p>
                                    <div>{userPost.length > 0 ? 
                                        <div>
                                            <SubmitEditCard key={userPost[0].title} editMode={true} postId={userPost[0]._id} title={userPost[0].title} votes={userPost[0].votes} liked={userPost[0].likes}/>
                                        </div>
                                        : <div>
                                            <SubmitEditCard editMode={false} votes={0} optionA={prompt.aChoice} optionB={prompt.bChoice}/>
                                        </div>
                                    }
                                    </div>
                                </div>
                                    :
                                    <button onClick={() => setShow(true)} type="button" className="btn btn-outline-primary">Login</button>
                                }
                                <div className="row">
                                    <div className="col">
                                        <h3>{prompt.aChoice}</h3>
                                        {aPosts.map((post) => (
                                            <PostCard key={post.title} postId={post._id} title={post.title} votes={post.votes} liked={post.likes}/>
                                        ))}
                                    </div>
                                    <div className="col">
                                        <h3>{prompt.bChoice}</h3>
                                        {bPosts.map((post) => (
                                            <PostCard key={post.title} postId={post._id} title={post.title} votes={post.votes} liked={post.likes}/>
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
        <LoginModal value={{setUser}} show={show} setShow={setShow}/>
        <Footer />
    </div>
}

export default Prompts;