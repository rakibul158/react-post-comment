import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

const Home = () => {

    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setPosts(data));
    },[]);

    return (
        <div>
            <h2 style={{textAlign: 'center'}}>User Posts</h2>
            {
                posts.map(post => <Post key={post.id} post={post}></Post>)
            }
        </div>
    );
};

export default Home;