import HomePage from 'components/HomePage'
import * as routes from 'main/routes'
import React from 'react'
import { Route, Switch } from 'react-router-dom'

const AuthenticatedRouter: React.FC = () => {
  return (
    <Switch>
      <Route path={routes.MAIN} component={HomePage} />
    </Switch>
  )
}

export default AuthenticatedRouter
