import React from 'react';
import { Card } from 'antd';
import { Link } from "@reach/router";
import './post-preview.style.css';

const PostPreview = (props) => {
    return (
        <div className='post-container'>
            <Card 
                type="inner" 
                title={props.title}
                extra={<a href="/">Edit</a>}
            >
            {props.content}
            ...   <Link to={`/post/${props.id}`}>Read Full Article</Link>
            </Card>
        </div>
    );
}

export default PostPreview;