import React, { useState } from 'react';
import { PageHeader, Input, Button } from 'antd';
import db from '../../firebase';
import { navigate } from "@reach/router";

import './new-post.style.css';

/* This is page to create a new post, only authorized user could see it */

const NewPost = (props) => {

    console.log(props)

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const onTitleChange = (event) => setTitle(event.target.value);
    const onContentChange = (event) => setContent(event.target.value);

    // If <create post> button is clicked, following function will be triggered
    const onCreatPost = () => {
        let postRef = db.collection('posts');
        let payload = {title, content};

        postRef.add(payload)
            .then((docRef) => {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
            setTitle('');
            setContent('');
            navigate('/blog');
    }  

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
                    <Input placeholder="Title" value={title} onChange={onTitleChange} />
                </div>
                <div className="newpost-content-item">
                    <TextArea rows={10} placeholder="Content" value={content} onChange={onContentChange} />
                </div>
                <div className="newpost-content-item">
                    <Button type="primary" size="large" onClick={onCreatPost} style={{float:"right"}}>Create Post</Button>
                </div>
            </div>
        </div>
    );
}

export default NewPost;