import React from 'react';
import { Card } from 'antd';
import { Link } from "@reach/router";
import './post-preview.style.css';

{/* This is the component to show the snippet of one post and displays it in blog page */}

const PostPreview = (props) => {
    return (
        <div className='post-container'>
            <Card 
                type="inner" 
                title={props.title}
                extra={
                    <div>
                        {/* Only signed in user could see <edit> link */}
                        {
                            props.user &&
                            <a href={`/update-post/${props.id}`}>
                                Edit
                            </a>
                        }
                    </div>  
                }
            >
                {props.content.substring(0,500)}
                ...   <Link to={`/post/${props.id}`}>Read Full Article</Link>
            </Card>
        </div>
    );
}

export default PostPreview;