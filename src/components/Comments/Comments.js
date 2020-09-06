import React, { useState } from 'react';
import './Comment.css'
import imagesInfo from '../../FakeData/index';
import Image from '../Image/Image';

const Comments = (props) => {
    const [image] = useState(imagesInfo);
    const {name, email, body, id, postId} = props.comment;

    return (
        <div className='comment-container box-comment'>
            <div className='img-container'>
                <Image id={id} image={image}></Image>
            </div>
            <div className='text-container'>
                <h4> PostID : {postId}</h4>
                <h4>Name : {name}</h4>
                <h6>Email : {email}</h6>
                <p><b>Caption :</b> {body}</p>
            </div>
        </div>
    );
};

export default Comments;