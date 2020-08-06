import 'antd/dist/antd.css'

import { Layout } from 'antd'
import AppBody from 'components/AppBody'
import AppHeader from 'components/AppHeader'
import InvestorRouter from 'main/routers/InvestorRouter'
import React from 'react'

export enum ACCESS_LEVELS {
  OWNER = 'owner',
  INVESTOR = 'investor',
  ADMIN = 'admin',
}

const AppLayout: React.FC = () => {
  const accessLevel = ACCESS_LEVELS.INVESTOR

  const renderRouterForAccessLevel = (accessLevel: ACCESS_LEVELS) => {
    switch (accessLevel) {
      case ACCESS_LEVELS.INVESTOR:
      default:
        return <InvestorRouter />
    }
  }

  return (
    <Layout>
      <AppHeader />
      <AppBody>{renderRouterForAccessLevel(accessLevel)}</AppBody>
    </Layout>
  )
}

export default AppLayout
