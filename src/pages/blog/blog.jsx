import React, { useState, useEffect} from 'react';
import { PageHeader } from 'antd';
import PostPreview from '../../components/post-preview/post-preview.component';
import _ from 'lodash';
import db from '../../firebase';

import './blog.style.css'

{/* This is Blog page, it shows all the posts from firebase and displays in post-previwe component*/}

const Blog = (props) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        let postRef = db.collection('posts');

        postRef
            .onSnapshot(async posts => {
                let postsData = await posts.docs.map(post => {
                    let data = post.data();
                    let {id} = post;
                    let payload = {id, ...data}
                    return payload
                })
                setPosts(postsData);
            });
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
                                title={_.startCase(article.title)}
                                content={article.content}
                                user={props.user}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Blog;