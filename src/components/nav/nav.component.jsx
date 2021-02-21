import React from 'react';
import { Menu } from 'antd';
import { HomeOutlined, BookOutlined, FormOutlined } from '@ant-design/icons';

function Nav() {
    return (
        <Menu mode="horizontal">
          <Menu.Item key="home" icon={<HomeOutlined />}>
            Home
          </Menu.Item>
          <Menu.Item key="blog" icon={<BookOutlined />}>
            Blog
          </Menu.Item>
          <Menu.Item key="new-post" icon={<FormOutlined />}>
            Create New Post
          </Menu.Item>
        </Menu>
      );
}

export default Nav;