import IRoute from 'src/common/types/route/IRoute';

import Home from './containers/Home';

const routes: IRoute = {
  basePath: '/',
  routes: [
    {
      component: Home,
      path: '/',
      exact: true,
      needAuth: false,
    },
  ],
};

export default routes;
