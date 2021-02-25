import React, { useState, useEffect } from 'react';
import { PageHeader, Input, Button } from 'antd';
import { navigate } from "@reach/router";
import db from '../../firebase';

import './update-post.style.css';

const UpdatePost = (props) => {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    useEffect(() => {
        let postRef = db.collection('posts').doc(props.id);

        postRef.get().then(doc => {
            let {title, content} = doc.data();
            setTitle(title)
            setContent(content)
        })
    },[])

    const onTitleChange = (event) => setTitle(event.target.value);
    const onContentChange = (event) => setContent(event.target.value);

    const onUpdatePost = () => {
        let postRef = db.collection('posts').doc(props.id);
        let payload = { title, content };

        postRef.update(payload)
            .then((docRef) => {
                console.log("Document Updated with ID: ", docRef.id);
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
            navigate('/blog');
    }

    const { TextArea } = Input;

    return(
        <div className="update-post-container">
            <div className='update-post-header-container'>
                <PageHeader 
                    title="Create a new Post"
                    subTitle="Please enter post title and content"
                />
            </div>
            <div className='update-post-content-container'>
                <div className="update-post-content-item">
                    <Input value={title} onChange={onTitleChange} />
                </div>
                <div className="update-post-content-item">
                    <TextArea rows={10} value={content} onChange={onContentChange} />
                </div>
                <div className="update-post-content-item">
                    <Button type="primary" size="large" onClick={onUpdatePost} style={{float:"right"}}>Update Post</Button>
                </div>
            </div>
        </div>
    )
}

export default UpdatePost;