import React, {useContext, useEffect, useState} from "react";
import axios from 'axios';
import Login from '../components/Login';
import Logout from '../components/Logout';
import { UserContext } from "../UserContext";
import './Home.css';

function Home() {
    const [prompts, setPrompts] = useState([]);
    const {user, setUser} = useContext(UserContext);

    useEffect(() => {
        getAllPrompts();
    }, []);

    const getAllPrompts = () => {
        return axios
            .get('http://localhost:5000/prompts', {withCredentials: true} )
            .then((res) => {
                setPrompts(res.data);
            })
            .catch((err) => console.log(err));
    }

    return <div className="container">
        <div class="blog-single gray-bg">
            <div class="container">
                <div class="row align-items-start">
                    <div class="col-lg-8 m-15px-tb">
                        <article class="article">
                            <div class="article-img">
                                <img src="https://via.placeholder.com/800x350/87CEFA/000000" title="" alt=""></img>
                            </div>
                            <div class="article-title">
                                <h6><a href="#">Lifestyle</a></h6>
                                <h2>They Now Bade Farewell To The Kind But Unseen People</h2>
                                <div class="media">
                                    <div class="avatar">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" title="" alt=""></img>
                                    </div>
                                    <div class="media-body">
                                        <label>Ian Hinden</label>
                                        <span>26 FEB 2020</span>
                                    </div>
                                </div>
                            </div>
                            <div class="article-content">
                                <p>Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem. Adipiscing veni amet luctus enim sem libero tellus viverra venenatis aliquam. Commodo natoque quam pulvinar elit.</p>
                                <p>Eget aenean tellus venenatis. Donec odio tempus. Felis arcu pretium metus nullam quam aenean sociis quis sem neque vici libero. Venenatis nullam fringilla pretium magnis aliquam nunc vulputate integer augue ultricies cras. Eget viverra feugiat cras ut. Sit natoque montes tempus ligula eget vitae pede rhoncus maecenas consectetuer commodo condimentum aenean.</p>
                                <h4>What are my payment options?</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <blockquote>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                    <p class="blockquote-footer">Someone famous in <cite title="Source Title">Dick Grayson</cite></p>
                                </blockquote>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </article>
                    </div>
                    <div class="col-lg-4 m-15px-tb blog-aside">
                        <div class="widget widget-author">
                            <div class="widget-title">
                                <h3>Author</h3>
                            </div>
                            <div class="widget-body">
                                <div class="media align-items-center">
                                    <div class="avatar">
                                        <img src="https://pbs.twimg.com/media/FIuReT9UcAA-Wib?format=jpg&name=medium" title="" alt=""></img>
                                    </div>
                                    <div class="media-body">
                                        <h6>About Ian Hinden</h6>
                                    </div>
                                </div>
                                <p>Ian Hinden is (possibly) an actor in the forthcoming (maybe) critically-acclaimed Dune 2.</p>
                            </div>
                        </div>
                        <div class="widget widget-post">
                            <div class="widget-title">
                                <h3>Trending Now</h3>
                            </div>
                            <div class="widget-body">

                            </div>
                        </div>
                        <div class="widget widget-latest-post">
                            <div class="widget-title">
                                <h3>Latest Post</h3>
                            </div>
                            <div class="widget-body">
                                <div class="latest-post-aside media">
                                    <div class="lpa-left media-body">
                                        <div class="lpa-title">
                                            <h5><a href="#">Prevent 75% of visitors from google analytics</a></h5>
                                        </div>
                                        <div class="lpa-meta">
                                            <a class="name" href="#">
                                                Rachel Roth
                                            </a>
                                            <a class="date" href="#">
                                                26 FEB 2020
                                            </a>
                                        </div>
                                    </div>
                                    <div class="lpa-right">
                                        <a href="#">
                                            <img src="https://via.placeholder.com/400x200/FFB6C1/000000" title="" alt=""></img>
                                        </a>
                                    </div>
                                </div>
                                <div class="latest-post-aside media">
                                    <div class="lpa-left media-body">
                                        <div class="lpa-title">
                                            <h5><a href="#">Prevent 75% of visitors from google analytics</a></h5>
                                        </div>
                                        <div class="lpa-meta">
                                            <a class="name" href="#">
                                                Rachel Roth
                                            </a>
                                            <a class="date" href="#">
                                                26 FEB 2020
                                            </a>
                                        </div>
                                    </div>
                                    <div class="lpa-right">
                                        <a href="#">
                                            <img src="https://via.placeholder.com/400x200/FFB6C1/000000" title="" alt=""></img>
                                        </a>
                                    </div>
                                </div>
                                <div class="latest-post-aside media">
                                    <div class="lpa-left media-body">
                                        <div class="lpa-title">
                                            <h5><a href="#">Prevent 75% of visitors from google analytics</a></h5>
                                        </div>
                                        <div class="lpa-meta">
                                            <a class="name" href="#">
                                                Rachel Roth
                                            </a>
                                            <a class="date" href="#">
                                                26 FEB 2020
                                            </a>
                                        </div>
                                    </div>
                                    <div class="lpa-right">
                                        <a href="#">
                                            <img src="https://via.placeholder.com/400x200/FFB6C1/000000" title="" alt=""></img>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="widget widget-tags">
                            <div class="widget-title">
                                <h3>Latest Tags</h3>
                            </div>
                            <div class="widget-body">
                                <div class="nav tag-cloud">
                                    <a href="#">Design</a>
                                    <a href="#">Development</a>
                                    <a href="#">Travel</a>
                                    <a href="#">Web Design</a>
                                    <a href="#">Marketing</a>
                                    <a href="#">Research</a>
                                    <a href="#">Managment</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Home;