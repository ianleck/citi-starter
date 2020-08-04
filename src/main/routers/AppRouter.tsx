import React from 'react';
import { Route, Switch } from 'react-router-dom';

import * as routes from '../routes';
import HomePage from '../home/index';

const AppRouter: React.FC = () => {
  return (
    <Switch>
      <Route path={routes.MAIN} component={HomePage} />
    </Switch>
  );
};

export default AppRouter;
