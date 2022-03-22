import { Switch, Route } from 'react-router-dom';

import routes from 'src/base/routes/routesCombine';
import AuthenticatedRoute from './common/components/auth/AuthenticatedRoute';
import IRoute from './common/types/route/IRoute';

export default function Routes() {
  return (
    <Switch>
      {routes.map((route: IRoute, index) => (
        route.needAuth ? (
          <AuthenticatedRoute
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ) : (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        )
      ))}
    </Switch>
  );
}
