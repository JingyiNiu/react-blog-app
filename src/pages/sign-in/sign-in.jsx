import React, { useState } from 'react';
import { PageHeader, Input, Button } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { Link, navigate } from '@reach/router';
import { auth } from '../../firebase';

import './sign-in.style.css';

const SignIn = () => {
    return (
        <div className='signin-container'>
            <div className='page-header'>
                <PageHeader 
                    title="Please Sign in"
                />
            </div>
            
            <div className='signin-inputs-container'>
                <div className='signin-item-container'>
                    <Input size="large" placeholder="Email" prefix={<MailOutlined />} />
                </div>
                <div className='signin-item-container'>
                    <Input.Password size="large" placeholder="Password" prefix={<LockOutlined />} />
                </div>
                <div className='signin-item-container'>
                <Link to="../register">Don't have an account, Register</Link>
                    <Button type="primary" size="large" style={{float:"right"}}>Sign In</Button>
                </div>
            </div>
        </div>
    )
}

export default SignIn;
