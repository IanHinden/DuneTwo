import React, {useContext, useEffect, useState} from "react";
import axios from 'axios';
import Login from '../components/Login';
import Logout from '../components/Logout';
import { UserContext } from "../UserContext";

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
        <h1>Home</h1>
        {user ? 
            <Logout value={{setUser}}/> : <Login value={{setUser}}/>
        }
        <div>
            <h1>{user}</h1>
        </div>
    </div>
}

export default Home;