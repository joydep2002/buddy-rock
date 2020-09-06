import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';

const Home = () => {
    const [post, setPost] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts") 
        .then(res => res.json()) 
        .then(data => setPost(data));
    } , [])
    return (
        <div>
            {
                post.map(pt =><Post key={pt.id} post={pt}></Post>)
            }
        </div>
    );
};

export default Home;