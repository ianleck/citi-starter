import 'antd/dist/antd.css'

import { Layout } from 'antd'
import React from 'react'
import styled from 'styled-components/macro'

const { Content, Footer } = Layout

const AppBody: React.FC = ({ children }) => {
  return (
    <Layout>
      <Content style={{ padding: '0 50px' }}>
        <SiteBody>{children}</SiteBody>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Citi Starter ©2020 Created by Citi Interns
      </Footer>
    </Layout>
  )
}

export default AppBody

const SiteBody = styled.div`
  background: #fff;
  padding: 24px;
  min-height: 280px;
`
