import IRoute from 'src/common/types/route/IRoute';

import Home from 'src/pages/home/routes';
import Profile from 'src/pages/profile/routes';

const routes: Array<IRoute> = [
  ...Home,
  ...Profile,
];

export default routes;
