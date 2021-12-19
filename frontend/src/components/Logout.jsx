import React, { useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../UserContext";

function Logout() {
    const {value, setValue} = useContext(UserContext);
    const onClick = e => {
        e.preventDefault();

        axios
            .delete("http://localhost:5000/logout", {withCredentials: true})
            .then(res => {
                console.log(res);
                setValue("Logged out now")
            })
            .catch(err => {
                console.log(err);
                console.log(err.response);
            });
    };

    return <div className="container">
    <h1>Logout</h1>
        <button onClick={onClick} className="btn btn-lg btn-info">Logout</button>
    </div>
}

export default Logout;