import React from "react";
import './PostCard.css';

function PostCard(props) {
    return <div class="card">
      <p>
        {props.title}
      </p>
  </div>
}

export default PostCard;