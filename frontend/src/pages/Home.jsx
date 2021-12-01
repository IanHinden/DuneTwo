import React, {useEffect, useState} from "react";
import axios from 'axios';

function Home() {
    const [prompts, setPrompts] = useState([]);

    useEffect(() => {
        getAllPrompts();
    }, []);

    const getAllPrompts = () => {
        return axios
            .get('http://localhost:5000/prompts')
            .then((res) => {
                setPrompts(res.data);
                console.log(res.data);
                console.log("Got em", prompts)
            })
            .catch((err) => console.log(err));
    }

    return <div className="container">
        <h1>Home</h1>
    </div>
}

export default Home;