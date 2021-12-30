import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Post.css'

const Post = (props) => {

    const {id,title,body } = props.post;
    const navigate = useNavigate();

    const handleBtnClick = (id) => {
        const url = `/post-details/${id}`;
        navigate(url);
    }

    return (
        <div className="post">
            <h3>{title}</h3>
            <p>{body}</p>
            <button onClick={() => handleBtnClick(id)}>Show Details</button>
        </div>
    );
};

export default Post;