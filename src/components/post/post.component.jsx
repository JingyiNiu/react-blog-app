import React from 'react';
import { Card } from 'antd';
import './post.style.css';

const Post = (props) => {
    return (
        <div className='post-container'>
            <Card 
                type="inner" 
                title={props.title}
                extra={<a href="">Edit</a>}
            >
            {props.content}
            </Card>
        </div>
    );
}

export default Post;