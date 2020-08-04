import React, { ReactNode } from 'react';
import styled from 'styled-components/macro';
import { Layout, Menu, Breadcrumb } from 'antd';
import { MenuProps } from 'antd/lib/menu';
import MenuItem from 'antd/lib/menu/MenuItem';
import 'antd/dist/antd.css';
const { Header, Content, Footer } = Layout;

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Header>
        <Logo />
        <StyledMenu
          antdtheme="dark"
          mode="horizontal"
          defaultSelectedKeys={['Home']}
        >
          <MenuItem key="Home">Home</MenuItem>
          <MenuItem key="Explore">Explore</MenuItem>
          <MenuItem key="Profile">Profile</MenuItem>
        </StyledMenu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        {/* <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
        <SiteBody>Content</SiteBody>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Citi Starter ©2020 Created by Citi Interns
      </Footer>
    </Layout>
  );
};

export default HomePage;

interface RevisedMenuProps extends MenuProps {
  antdTheme: 'light' | 'dark' | undefined;
  children: ReactNode;
}

const RevisedMenu = ({
  antdTheme,
  children,
  ...otherProps
}: RevisedMenuProps) => {
  return (
    <Menu theme={antdTheme} {...otherProps}>
      {children}
    </Menu>
  );
};

export const StyledMenu = styled(RevisedMenu)`
  line-height: 61px;
  font-family: 'Montserrat', sans-serif;
  border-bottom: none;
  width: 100%;
  .ant-menu-item-selected {
    color: #50d9cd;
    border-bottom: 2px solid #50d9cd;
  }
  .ant-menu-item:hover {
    color: #50d9cd;
    border-bottom: 2px solid #50d9cd;
  }
`;

const Logo = styled.div`
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
`;

// const StyledNavBar = styled(Menu)`
//   background: rgba(255, 255, 255, 0.3);
// `;

const SiteBody = styled.div`
  background: #fff;
  padding: 24px;
  min-height: 280px;
`;
