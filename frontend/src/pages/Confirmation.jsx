import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import axios from 'axios';
import config from "../config.json";

function Confirmation() {
    const { token } = useParams();
    const [tokenPresent, setTokenPresent] = useState(false);
    const [text, setText] = useState("Check Your Email to Confirm Your Account");

    useEffect(() => {
        getUserByToken(token);
    }, [token]);

    const getUserByToken = (token) => {
        if(!token){
            return;
        }

        setTokenPresent(true);

        const userData = {
            tokenId: token,
        };

        return axios
            .post(`${config.SERVER_URL}verify`, userData, {withCredentials: true} )
            .then((res) => {
                setText("Your account is confirmed. You are now able to log in.");
            })
            .catch((err) => console.log(err), setText("Invalid code or user."));
    }

    return <div className="container" id="outblog">
        <div className="blog-single gray-bg">
            <div className="container">
                <div className="row align-items-start">
                    <div className="col-lg-8 m-15px-tb">
                        <article className="article">
                            {text}
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
        <Footer />
    </div>
}

export default Confirmation;