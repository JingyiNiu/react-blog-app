import React from 'react';
import { Card, Button} from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Link } from "@reach/router";
import db from '../../firebase';

import './post-preview.style.css';

/* This is the component to show the snippet of one post and displays it in blog page */

const PostPreview = (props) => {

    const onDeletePost = () => {
        let confirm = window.confirm('Are you sure you want to Remove?');
        if (confirm) {
            let postRef = db.collection('posts').doc(props.id);
            postRef.delete()
                .then(() => {
                    console.log("Document successfully deleted!");
                }).catch((error) => {
                    console.error("Error removing document: ", error);
                });
        }
    }

    return (
        <div className='post-container'>
            <Card 
                type="inner" 
                title={props.title}
                extra={
                    <div>
                        {/* Only signed in user could see <edit> and <delete> link */}
                        {
                            props.user &&
                            <div>
                                <Button type="text" icon={<EditOutlined />} href={`/update-post/${props.id}`} />
                                <Button danger type="text" icon={<DeleteOutlined />} onClick={onDeletePost}/>
                            </div>
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