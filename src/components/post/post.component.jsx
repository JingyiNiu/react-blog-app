import React, {useState, useEffect } from 'react';
import { PageHeader, Card } from 'antd';

import api from '../../mockapi';

import './post.style.css';

const Post = (props) => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        let post = api[props.id]
        setTitle(post.title)
        setContent(post.content)
    })

    return(
        <div className="post-container">
            <div className='post-header-container'>
                <PageHeader 
                    title={title}
                    subTitle="Subtitle"
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