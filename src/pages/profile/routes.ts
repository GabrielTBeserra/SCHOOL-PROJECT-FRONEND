import IRoute from 'src/common/types/route/IRoute';

import Profile from './containers/Profile';

const routes: Array<IRoute> = [
  {
    component: Profile,
    path: '/profile',
    exact: true,
    needAuth: true,
  },
];

export default routes;
