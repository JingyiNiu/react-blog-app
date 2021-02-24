import React, { useState, useEffect} from 'react';
import { PageHeader } from 'antd';
import PostPreview from '../../components/post-preview/post-preview.component';
import _ from 'lodash';
import db from '../../firebase';

import './blog.style.css'

const Blog = (props) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        let postRef = db.collection('posts');

        postRef.get()
            .then(posts => {
                posts.forEach(post => {
                    let data = post.data();
                    let {id} = post;

                    let payload = {id, ...data}

                    setPosts((posts) => [...posts, payload])
                })
            })
    }, []);

    return (
        <div className='blog-container'>
            <div className='page-header'>
                <PageHeader 
                    title="Blog"
                    subTitle="All posts are shown here"
                />
            </div>
            
            <div className='posts-container'>
                {
                    _.map(posts, (article, index) => {
                        return (
                            <PostPreview
                                key={index}
                                id={article.id}
                                title={article.title}
                                content={article.content}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Blog;