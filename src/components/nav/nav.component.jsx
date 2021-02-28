import React from 'react';
import { Menu } from 'antd';
import { HomeOutlined, BookOutlined, FormOutlined, LoginOutlined, PlusOutlined } from '@ant-design/icons';
import { Link, navigate } from "@reach/router";
import { auth } from '../../firebase';

import './nav.style.css';
import userEvent from '@testing-library/user-event';

const Nav = (props) =>  {

  const onSignOut = () => {
    auth.signOut()
      .then(() => {
        window.location.reload();
        console.log("Successfully Signed Out")
      }).catch((error) => {
        console.log(error.message)
      });
  }

  return (
    <div className="nav-container">
      <Menu mode="horizontal" className='nav-container' theme="dark">
        <Menu.Item key="home" icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="blog" icon={<BookOutlined />}>
          <Link to="blog">Blog</Link>
        </Menu.Item>
        { props.user &&
          <Menu.Item key="new-post" icon={<FormOutlined />}>
            <Link to="newpost">Create New Post</Link>
          </Menu.Item>
        }
        
        {
          !props.user
            ?
            <Menu.Item key="signin" style={{float:'right'}} icon={<FormOutlined />}>
              <Link to="signin">Sign In</Link>
            </Menu.Item>
            :
            <a onClick={onSignOut} style={{float:'right', marginRight:'30px'}} >Log Out</a> 
        }
        {/*
        <Menu.Item key="signin" icon={<LoginOutlined />} style={{float:'right'}}>
          <Link to="signin">Sign In</Link>
        </Menu.Item>
        <Menu.Item key="register" icon={<PlusOutlined />} style={{float:'right'}}>
          <Link to="register">Register</Link>
        </Menu.Item>
        <a onClick={onSignOut} style={{float:'right'}} >Log Out</a>
        */}
      </Menu>
    </div>
    );
}

export default Nav;