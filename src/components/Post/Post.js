import React from 'react';
import { Container } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Post = (props) => {
    const { title, id, body } = props.post;

    const postStyle = {
        border: '1px solid lightGray', 
        marginTop: '20px',
        padding: '10px'
    }

    return (
        <Container fixed style={postStyle} className="box">
            <p><strong>Post No : {id}</strong></p>
            <h3>Post Title : {title}</h3>
            <p><b>Caption :</b> {body}</p>
            <Link to={`/${id}`} >
                <button className="main-btn">see more</button>
            </Link>
        </Container>
    );
};

export default Post;