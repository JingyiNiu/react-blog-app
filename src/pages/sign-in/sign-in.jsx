import React, { useState } from 'react';
import { PageHeader, Input, Button } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { Link, navigate } from '@reach/router';
import { auth } from '../../firebase';

import './sign-in.style.css';

{/* This is sign-in page, only unauthorised people see this link */}

const SignIn = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onEmailChange = (event) => setEmail(event.target.value);
    const onPasswordChange = (event) => setPassword(event.target.value);

    const onSignin = () => {
        auth.signInWithEmailAndPassword(email, password)
            .then((user) => {
                setEmail('');
                setPassword('');
                navigate('../');
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }

    return (
        <div className='signin-container'>
            <div className='page-header'>
                <PageHeader 
                    title="Please Sign in"
                />
            </div>
            
            <div className='signin-inputs-container'>
                <div className='signin-item-container'>
                    <Input size="large" placeholder="Email" prefix={<MailOutlined />} onChange={onEmailChange} />
                </div>
                <div className='signin-item-container'>
                    <Input.Password size="large" placeholder="Password" prefix={<LockOutlined />}  onChange={onPasswordChange} />
                </div>
                <div className='signin-item-container'>
                <Link to="../register">Don't have an account, Register</Link>
                    <Button type="primary" size="large" style={{float:"right"}}  onClick={onSignin} >Sign In</Button>
                </div>
            </div>
        </div>
    )
}

export default SignIn;
