import AppLayout from 'main/routers/AppLayout'
import * as routes from 'main/routes'
import React from 'react'
import { Route, Switch } from 'react-router-dom'

const AppRouter: React.FC = () => {
  return (
    <Switch>
      <Route path={routes.MAIN} component={AppLayout} />
    </Switch>
  )
}

export default AppRouter
