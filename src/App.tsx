import React from 'react';

// layout
import PageLayout from '@/layout/common';

// pages
import HomePage from '@/pages/home';

const App: React.FC<unknown> = () => (
  <PageLayout>
    <HomePage />
  </PageLayout>
);

export default App;
