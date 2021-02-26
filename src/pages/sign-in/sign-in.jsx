import React from 'react';
import { PageHeader, Input, Button } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from "@reach/router";

import './sign-in.style.css';

const SignIn = () => {
    return (
        <div className='signin-container'>
            <div className='page-header'>
                <PageHeader 
                    title="Sign in"
                    subTitle="Sign in with a existing account"
                />
            </div>
            
            <div className='signin-inputs-container'>
                <div className='signin-item-container'>
                    <Input size="large" placeholder="Email" prefix={<MailOutlined />} />
                </div>
                <div className='signin-item-container'>
                    <Input size="large" placeholder="Password" prefix={<LockOutlined />} />
                </div>
                <div className='signin-item-container'>
                <Link to="../register">Don't have an account</Link>
                    <Button type="primary" size="large" style={{float:"right"}}>Sign In</Button>
                </div>
            </div>
        </div>
    )
}

export default SignIn;
