import React, { memo } from "react";
import { useNavigate } from 'react-router-dom';
import { Layout, Avatar, Menu, Dropdown } from 'antd';
import avatarPng from '@/assets/avatar.png'
import {
  LogoutOutlined,
  UserOutlined
} from '@ant-design/icons';

const { Header } = Layout;

const menu = (
  <Menu
    items={[
      {
        key: '1',
        label: "个人中心",
        icon: <UserOutlined />
      },
      {
        key: '2',
        label: '退出登录',
        icon: <LogoutOutlined />
      },
    ]}
  />
);

const LayoutHeader = ({ collapsed, setCollapsed }) => {

  const navigate = useNavigate();

  return (
    <Header className="site-layout-background" style={{ padding: 0 }}>
      <div className="logo" onClick={() => navigate('/')}>webpack-react-reduxjs/toolkit</div>
      <Dropdown overlay={menu}>
        <span className="layout-header-user">
          <Avatar size={24} src={avatarPng} />
          <span style={{ marginLeft: 10 }}>admin</span>
        </span>
      </Dropdown>

    </Header>
  )
}


export default memo(LayoutHeader)