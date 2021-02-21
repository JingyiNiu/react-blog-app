import React from 'react';
import { Menu } from 'antd';
import { HomeOutlined, BookOutlined, FormOutlined } from '@ant-design/icons';
import { Link } from "@reach/router";

import './nav.style.css';

function Nav() {
    return (
        <Menu mode="horizontal" className='nav-container' theme="dark">
          <Menu.Item key="home" icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="blog" icon={<BookOutlined />}>
            <Link to="blog">Blog</Link>
          </Menu.Item>
          <Menu.Item key="new-post" icon={<FormOutlined />}>
            Create New Post
          </Menu.Item>
        </Menu>
      );
}

export default Nav;