import React from 'react';
import { PageHeader } from 'antd';
import Post from '../../components/post/post.component';
import api from '../../mockapi';
import _ from 'lodash';

import './blog.style.css'

const Blog = (props) => {
    return (
        <div className='blog-container'>
            <div className='page-herder'>
                <PageHeader 
                    title="Blog"
                    subTitle="All posts are shown here"
                />
            </div>
            
            <div className='posts-container'>
                {
                    _.map(api, (article) => {
                        return (
                            <Post 
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