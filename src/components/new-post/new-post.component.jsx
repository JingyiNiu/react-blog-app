import React from 'react';
import { PageHeader, Input, Button } from 'antd';

import './new-post.style.css';

const NewPost = (props) => {

    const { TextArea } = Input;

    return(
        <div className="newpost-container">
            <div className='newpost-header-container'>
                <PageHeader 
                    title="Create a new Post"
                    subTitle="Please enter post title and content"
                />
            </div>
            <div className='newpost-content-container'>
                <div className="newpost-content-item">
                    <Input placeholder="Title" />
                </div>
                <div className="newpost-content-item">
                    <TextArea rows={10} placeholder="Content"/>
                </div>
                <div className="newpost-content-item">
                    <Button type="primary" size="large" style={{float:"right"}}>Submit</Button>
                </div>
            </div>
        </div>
    );
}

export default NewPost;