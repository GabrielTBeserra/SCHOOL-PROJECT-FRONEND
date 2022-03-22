import IRoute from 'src/common/types/route/IRoute';

import Login from './login/Login';

const routes: IRoute = {
  basePath: '/auth',
  routes: [
    {
      component: Login,
      path: 'login',
      exact: true,
      needAuth: false,
    },
  ],
};

export default routes;
