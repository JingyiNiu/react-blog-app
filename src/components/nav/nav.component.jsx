import React from 'react';
import { Menu } from 'antd';
import { HomeOutlined, BookOutlined, FormOutlined, LoginOutlined, PlusOutlined } from '@ant-design/icons';
import { Link, navigate } from "@reach/router";
import { auth } from '../../firebase';

import './nav.style.css';

{/* This is navigation component */}

const Nav = (props) =>  {

  // Sign Out function
  // If <Sign Out> button is clicked, you will be signed out and page will be refreshed
  const onSignOut = () => {
    auth.signOut()
      .then(() => {
        console.log("Successfully Signed Out")
      }).catch((error) => {
        console.log(error.message)
      });
      window.location.reload();
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
        {/* Only user who has signed in could see <create-new-post> button */}
        { props.user &&
          <Menu.Item key="new-post" icon={<FormOutlined />}>
            <Link to="newpost">Create New Post</Link>
          </Menu.Item>
        }
        
        {/* If user has signed in, they could see <sign out> button. otherwise, ther will see <sign in> button */}
        {
          !props.user
            ?
            <Menu.Item key="signin" style={{float:'right'}} icon={<FormOutlined />}>
              <Link to="signin">Sign In</Link>
            </Menu.Item>
            :
            <a onClick={onSignOut} style={{float:'right', marginRight:'30px'}} >Sign Out</a> 
        }
      </Menu>
    </div>
    );
}
export default Nav;