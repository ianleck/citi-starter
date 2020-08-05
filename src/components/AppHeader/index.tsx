import 'antd/dist/antd.css'

import { Layout, Menu } from 'antd'
import { MenuProps } from 'antd/lib/menu'
import MenuItem from 'antd/lib/menu/MenuItem'
import logo from 'common/img/citi_logo.png'
import * as routes from 'main/routes'
import React, { ReactNode } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import styled from 'styled-components/macro'

const { Header } = Layout

const AppHeader: React.FC = () => {
  const location = useLocation()
  let history = useHistory()

  const rootRoute = location.pathname
  console.log(rootRoute, 'rootRoute')

  const onClick = ({ key }: { key: string }) => {
    history.push(key)
  }

  return (
    <>
      <Header>
        <Logo src={logo} />
        <StyledMenu
          antdtheme="dark"
          mode="horizontal"
          defaultSelectedKeys={routes.MAIN}
          onClick={onClick}
        >
          <MenuItem key={routes.MAIN}>Home</MenuItem>
          <MenuItem key={routes.EXPLORE}>Explore</MenuItem>
          <MenuItem key={routes.MY_PROFILE}>Profile</MenuItem>
        </StyledMenu>
      </Header>
    </>
  )
}

export default AppHeader

interface RevisedMenuProps extends MenuProps {
  antdTheme: 'light' | 'dark' | undefined
  children: ReactNode
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
  )
}

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
`

const Logo = styled.div`
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
`
