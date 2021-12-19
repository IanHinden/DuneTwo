import React, {useContext, useEffect, useState} from "react";
import axios from 'axios';
import Login from '../components/Login';
import Logout from '../components/Logout';
import { UserContext } from "../UserContext";

function Home() {
    const [prompts, setPrompts] = useState([]);
    const {value, setValue} = useContext(UserContext);

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
        <Login value={{value, setValue}}/>
        <Logout value={{value, setValue}}/>
        <div>
            <h1>{value}</h1>
        </div>
    </div>
}

export default Home;