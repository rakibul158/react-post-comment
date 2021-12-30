import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';
import './PostDetails.css';

const PostDetails = () => {
    const {id} = useParams();
    const [postDetails, setPostDetails] = useState({});
    const [comments,setComments] = useState([]);
   

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
        .then(response =>response.json())
        .then(data =>setPostDetails(data));
    },[]);

    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
        fetch(url)
        .then(response =>response.json())
        .then(data =>setComments(data));
    },[]);

    

    return (
        <div>
            <h3>Post Details</h3>
            <div className="post-details">
                <h4>{postDetails.title}</h4>
                <p>{postDetails.body}</p>
            </div>
            <div className="comment-details">
                <h3>Comments</h3>
            {
                comments.map(comment => <Comments key={comment.id} comment={comment}></Comments>)
            }
            </div>
        </div>
        
    );
};

export default PostDetails;