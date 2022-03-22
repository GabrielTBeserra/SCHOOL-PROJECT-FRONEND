import React from 'react';

interface IRoute {
    path: string;
    component: React.ComponentType<any>;
    exact?: boolean;
    needAuth?: boolean;
}

export default IRoute;
