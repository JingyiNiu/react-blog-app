import React from 'react';
import { Menu } from 'antd';
import { HomeOutlined, BookOutlined, FormOutlined, LoginOutlined, PlusOutlined, ExportOutlined  } from '@ant-design/icons';
import { Link } from "@reach/router";

import './nav.style.css';

function Nav() {
  return (
    <div className="nav-container">
      <Menu mode="horizontal" className='nav-container' theme="dark">
        <Menu.Item key="home" icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="blog" icon={<BookOutlined />}>
          <Link to="blog">Blog</Link>
        </Menu.Item>
        <Menu.Item key="new-post" icon={<FormOutlined />}>
          <Link to="newpost">Create New Post</Link>
        </Menu.Item>
        
        <Menu.Item key="signin" icon={<LoginOutlined />} style={{float:'right'}}>
          <Link to="signin">Sign In</Link>
        </Menu.Item>
        <Menu.Item key="register" icon={<PlusOutlined />} style={{float:'right'}}>
          <Link to="register">Register</Link>
        </Menu.Item>
        <Menu.Item key="logout" icon={<ExportOutlined />} style={{float:'right'}}>
          <Link to="">Log Out</Link>
        </Menu.Item>
      </Menu>
    </div>
    );
}

export default Nav;