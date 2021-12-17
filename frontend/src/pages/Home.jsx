import React, {useEffect, useState} from "react";
import axios from 'axios';
import Login from '../components/Login';
import Logout from '../components/Logout';

function Home() {
    const [prompts, setPrompts] = useState([]);

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
        <h1>Home</h1>
        <Login />
        <Logout />
    </div>
}

export default Home;