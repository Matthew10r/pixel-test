import React from 'react';
import { Layout } from 'antd';

const PageLayout: React.FC<unknown> = ({ children }) => (
  <Layout style={{ height: '100%' }}>
    <Layout.Content style={{ padding: '50px 50px' }}>{children}</Layout.Content>
  </Layout>
);

export default PageLayout;
