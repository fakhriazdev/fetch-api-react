'use client';
import React from 'react';
import { Layout } from 'antd';

import { useFetchSkills } from '../features/skill/useFetchSkills';

const { Header, Content, Footer } = Layout;
const Page = () => {
  const { data: skills, isLoading } = useFetchSkills();
  return (
    <Layout>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
      </Header>
      <Content className="min-h-screen px-10 pt-10">
        <div className="grid grid-cols-2 gap-4">
          <div className="mx-auto h-80">
            <h1 className="text-xl font-semibold mb-4">Table Services</h1>
          </div>
          <div className="mx-auto h-80">
            <h1 className="text-xl font-semibold mb-4">Table Journeys</h1>
          </div>
          <div className="mx-auto h-80">
            <h1 className="text-xl font-semibold mb-4">Table Testimonial</h1>
          </div>
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
};
export default Page;
