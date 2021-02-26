import React from 'react';
import { PageHeader, Input, Button } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from "@reach/router";

import './register.style.css';

const Register = () => {
    return (
        <div className='register-container'>
            <div className='page-header'>
                <PageHeader 
                    title="Register"
                    subTitle="Create a new account"
                />
            </div>
            
            <div className='register-inputs-container'>
                <div className='register-item-container'>
                    <Input size="large" placeholder="Email" prefix={<MailOutlined />} />
                </div>
                <div className='register-item-container'>
                    <Input size="large" placeholder="Password" prefix={<LockOutlined />} />
                </div>
                <div className='register-item-container'>
                    <Link to="../signin">Already have an account</Link>
                    <Button type="primary" size="large" style={{float:"right"}}>Register</Button>
                </div>
            </div>
        </div>
    )
}

export default Register;
