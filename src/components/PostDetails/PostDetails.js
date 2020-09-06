import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';

const PostDetails = () => {
    const {postId} = useParams()
    const [post, setPost] = useState([]);
    const [comments, setComments] = useState([]);

    useEffect(() =>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => res.json())
        .then(data => setPost(data))
    }, [postId])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(res => res.json())
        .then(data => setComments(data));
    },[postId])
    return (
        <div>
            <div className="box" style={{padding:"5px", marginLeft:"20px"}}>
                <p><strong>Post No : {post.id}</strong></p>
                <h3>Post Title : {post.title}</h3>
                <p><b>Caption :</b> {post.body}</p>
            </div>
            <h4><u>Comments :</u></h4>
            {
                comments.map(cmt => <Comments  key={cmt.id} comment={cmt}></Comments>)
            }
        </div>
    );
};

export default PostDetails;