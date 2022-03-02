import React, {useState, useEffect} from "react";
import axios from 'axios';
import config from "../config.json";

function Blogs() {
    useEffect(() => {
        getBlogs();
    }, []);
    
    const getBlogs = () => {
        return axios
            .get(`${config.SERVER_URL}blogs`, {withCredentials: true} )
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => console.log(err));
    }

    return <div className="container" id="outblog">
        <div className="blog-single gray-bg">
            <div className="container">
                <div className="row align-items-start">
                <div className="col-lg-8 m-15px-tb">
                        <article className="article">
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

export default Blogs;