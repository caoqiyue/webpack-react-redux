import { memo, useState } from "react";
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import LayoutSider from './sider';
import LayoutHeader from "./header";
import './index.less'

const { Content } = Layout;

const LayoutIndex = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout className="global-layout">
      <LayoutHeader />
      <Layout className="site-layout">
        <LayoutSider collapsed={collapsed} setCollapsed={setCollapsed} />
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}


export default memo(LayoutIndex)