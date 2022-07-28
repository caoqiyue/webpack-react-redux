import React, { memo } from "react";
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  EyeInvisibleOutlined,
  FormOutlined ,
  AppstoreOutlined,
  CloseSquareOutlined
} from '@ant-design/icons';

const { Sider } = Layout;

const menus = [
  {
    label: '我的工作台',
    path: '/',
    icon: <FormOutlined  />
  },
  {
    label: '测试用例',
    path: '/test',
    icon: <AppstoreOutlined />
  },
  {
    label: '404',
    path: '/404',
    icon: <CloseSquareOutlined />
  },
  {
    label: '403',
    path: '/403',
    icon: <EyeInvisibleOutlined />
  },
]

const getMenus = (data) => {
  return data.map(item => ({
    label: <Link to={item.path}>{item.label}</Link>,
    key: item.path,
    icon: item.icon
  }))
}

const LayoutSider = ({ collapsed, setCollapsed }) => {


  return (
    <Sider trigger={null} collapsedWidth={60} collapsible collapsed={collapsed} className="layout-sider">
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        items={getMenus(menus)}
      />
      <div className="layout-sider-trigger-box">
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
          className: 'trigger',
          onClick: () => setCollapsed(!collapsed),
        })}
      </div>
    </Sider>
  )
}


export default memo(LayoutSider)