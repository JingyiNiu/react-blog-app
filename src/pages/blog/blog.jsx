import React from 'react';
import { PageHeader } from 'antd';
import PostPreview from '../../components/post-preview/post-preview.component';
import api from '../../mockapi';
import _ from 'lodash';

import './blog.style.css'

const Blog = (props) => {
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
                    _.map(api, (article, index) => {
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