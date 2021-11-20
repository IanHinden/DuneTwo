import React, {useState, useEffect} from "react";

function Posts() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch("/posts/").then(res => {
            if(res.ok) {
                return res.json();
            }
        }).then(jsonRes => setPosts(jsonRes.postsList))
    })

    return (<div>
        {posts.map(post => <li>{post}</li>)}
    </div>)
}

export default Posts;