import IRoute from 'src/common/types/route/IRoute';

import Home from 'src/pages/home/routes';
import Profile from 'src/pages/profile/routes';
import Auth from 'src/pages/auth/routes';

const routes: Array<IRoute> = [
  Home,
  Profile,
  Auth,
];

export default routes;
