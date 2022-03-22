import IRoute from 'src/common/types/route/IRoute';

import Home from './containers/Home';

const routes: Array<IRoute> = [
  {
    component: Home,
    path: '/',
    exact: true,
    needAuth: false,
  },
];

export default routes;
