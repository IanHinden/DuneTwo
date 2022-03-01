import React, { useContext } from "react";
import axios from "axios";
import config from "../config.json";
import { UserContext } from "../UserContext";

function Logout() {
    const {setUser} = useContext(UserContext);
    const onClick = e => {
        e.preventDefault();

        axios
            .delete(`${config.SERVER_URL}logout`, {withCredentials: true})
            .then(res => {
                console.log(res);
                setUser(null);
            })
            .catch(err => {
                console.log(err);
                console.log(err.response);
            });
    };

    return <button type="button" className="btn btn-outline-primary" onClick={onClick}>Logout</button>
}

export default Logout;