import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

function AutoLogout() {
  const isLogged = useSelector((state: any) => state.auth.isLogged);
  const history = useHistory();

  useEffect(() => {
    if (!isLogged) {
      history.push('/auth/login');
    }
  }, [isLogged]);

  return (
    <></>
  );
}

export default AutoLogout;
