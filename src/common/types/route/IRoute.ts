import React from 'react';

type RoutePath = {
  path: string;
    component: React.ComponentType<any>;
    exact?: boolean;
    needAuth?: boolean;
}

interface IRoute {
    basePath: string;
    routes: Array<RoutePath>;
}

export default IRoute;
