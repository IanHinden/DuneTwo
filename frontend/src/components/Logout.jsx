import React, { useContext } from "react";
import axios from "axios";
import { UserContext } from "../UserContext";

function Logout() {
    const {setUser} = useContext(UserContext);
    const onClick = e => {
        e.preventDefault();

        axios
            .delete("http://localhost:5000/logout", {withCredentials: true})
            .then(res => {
                console.log(res);
                setUser(null);
            })
            .catch(err => {
                console.log(err);
                console.log(err.response);
            });
    };

    return <button type="button" className="btn btn-outline-primary" onClick={onClick} className="btn btn-lg btn-info">Logout</button>
}

export default Logout;