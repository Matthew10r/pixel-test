import React from 'react';
import { Form } from 'antd';

// provider
import HomePageProvider from '@/providers/homePageProvider';

// components
import SelectPeople from './components/selectPeople';
import List from './components/list';

const HomePage: React.FC<unknown> = () => (
  <HomePageProvider>
    <Form layout="vertical">
      <Form.Item label="Add people to the list">
        <SelectPeople />
      </Form.Item>
    </Form>
    <List />
  </HomePageProvider>
);

export default HomePage;
