import React, { useState } from 'react';
import { PageHeader, Input, Button } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { Link, navigate } from '@reach/router';
import { auth } from '../../firebase';

import './register.style.css';

const Register = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onEmailChange = (event) => setEmail(event.target.value);
    const onPasswordChange = (event) => setPassword(event.target.value);

    const onRegister = () => {
        auth.createUserWithEmailAndPassword(email, password)
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
            });
        setEmail('');
        setPassword('');
        navigate('../');
    }

    return (
        <div className='register-container'>
            <div className='page-header'>
                <PageHeader 
                    title="Create a new account"
                />
            </div>
            
            <div className='register-inputs-container'>
                <div className='register-item-container'>
                    <Input size="large" placeholder="Email" prefix={<MailOutlined />} onChange={onEmailChange} />
                </div>
                <div className='register-item-container'>
                    <Input.Password size="large" placeholder="Password" prefix={<LockOutlined />} onChange={onPasswordChange} />
                </div>
                <div className='register-item-container'>
                    <Link to="../signin">Already have an account, Sign In</Link>
                    <Button type="primary" size="large" style={{float:"right"}} onClick={onRegister} >Register</Button>
                </div>
            </div>
        </div>
    )
}

export default Register;
