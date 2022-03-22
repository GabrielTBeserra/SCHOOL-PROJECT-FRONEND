import { Route, useHistory } from 'react-router-dom';
import React, { FC, useEffect } from 'react';

import useCheckLogin from 'src/common/hooks/useCheckLogin';

type Props = {
  component: React.ComponentType<any>;
  path: string;
  exact?: boolean;
}

const AuthenticatedRoute: FC<Props> = ({ component, path, exact }) => {
  const history = useHistory();

  useEffect(() => {
    const { checkIsLogged } = useCheckLogin();
    const isLogged = checkIsLogged();

    if (!isLogged) {
      history.push('/auth/login');
    }
  }, []);

  return (
    <Route path={path} exact={!!exact} component={component} />
  );
};

export default AuthenticatedRoute;
