import React, {useState, useEffect} from "react";
import axios from 'axios';
import {Link, useParams} from "react-router-dom";
import config from "../config.json";

function Blogs() {
    const { id } = useParams();
    const [blogs, setBlogs] = useState([]);
    const [latestBlog, setLatestBlog] = useState([]);

    useEffect(() => {
        getBlogs();
        getBlogById({id}.id);
    }, [id]);
    
    const getBlogs = () => {
        return axios
            .get(`${config.SERVER_URL}blogs`, {withCredentials: true} )
            .then((res) => {
                setBlogs(res.data);
            })
            .catch((err) => console.log(err));
    }

    const getBlogById = (id) => {
        if(id !== "0"){
            return axios
                .get(`${config.SERVER_URL}blog/${id}`, { withCredentials: true })
                .then((res) => {
                    setLatestBlog(res.data.Data);
                })
                .catch((err) => console.log(err));
            } else {
                return axios
                .get(`${config.SERVER_URL}latestBlog`, { withCredentials: true })
                .then((res) => {
                    setLatestBlog(res.data);
                })
                .catch((err) => console.log(err));
            }
    }

    return <div className="container" id="outblog">
        <div className="blog-single gray-bg">
            <div className="container">
                <div className="row align-items-start">
                    <div className="col-lg-8 m-15px-tb">
                        <article className="article">
                        <div dangerouslySetInnerHTML={{__html: latestBlog.content}}></div>
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
                        <div className="widget widget-author">
                            <div className="widget-title">
                                <h3>Blog Archive</h3>
                            </div>
                            <div className="widget-body">
                                {blogs.map(blog => (<li key={blog._id}><Link to={`/blogs/${blog._id}`}>{blog.title}</Link></li>))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Blogs;