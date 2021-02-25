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
                extra={<a href={`/update-post/${props.id}`}>Edit</a>}
            >
                {props.content.substring(0,500)}
                ...   <Link to={`/post/${props.id}`}>Read Full Article</Link>
            </Card>
        </div>
    );
}

export default PostPreview;