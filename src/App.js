import React from 'react';
import { Layout } from 'antd';
import IndexRouter from './router/index';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <Layout className="page">
      <Header />
      <Layout.Content>
        <div className="wrap">
          <IndexRouter />
        </div>
      </Layout.Content>
      <Footer />
    </Layout>
  );
}

export default App;
