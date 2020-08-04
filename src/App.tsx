import React from 'react';

import { Layout, Menu, Breadcrumb } from 'antd';
import './App.css';
import AppRouter from './main/routers/AppRouter';
const { Header, Content, Footer } = Layout;

class App extends React.Component {
  public render() {
    return <AppRouter />;
  }
}

export default App;
