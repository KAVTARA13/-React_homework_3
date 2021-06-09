import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Books from './pages/books';
import { Loader } from './components/loader/Loader';
import * as routes from './utils/routePaths';

const AuthPage = React.lazy(() => import('./pages/auth'));

const Routes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route path={routes.SIGN_UP}>
          <AuthPage />
        </Route>
        <Route path={routes.HOME}>
          <Books />
        </Route>
      </Switch>
    </Suspense>
  );
};

export default Routes;