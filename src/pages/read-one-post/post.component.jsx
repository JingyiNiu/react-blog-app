import React, { useState, useEffect } from 'react';
import { PageHeader, Card } from 'antd';

import db from '../../firebase';

import './post.style.css';

/* This is page to show the full content of one exact post */

const Post = (props) => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    useEffect((props) => {
        let postRef = db.collection('posts').doc(props.id);

        postRef.get().then(doc => {
            let {title, content} = doc.data();
            setTitle(title)
            setContent(content)
        })
    },[props])

    return(
        <div className="post-container">
            <div className='post-header-container'>
                <PageHeader 
                    title={title}
                />
            </div>
            <div className='post-content-container'>
                <Card>
                    <p>
                        {
                            content.split('\n').map((item, i) => {
                                return <p key={i}> { item } </p>
                            })
                        }
                    </p>
                </Card>
            </div>
        </div>
    );
}

export default Post;