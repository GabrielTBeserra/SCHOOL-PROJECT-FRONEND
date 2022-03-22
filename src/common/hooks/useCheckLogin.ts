const useCheckLogin = () => {
  const checkIsLogged = () => {
    const user = sessionStorage.getItem('token');

    if (user) { return true; }
    return false;
  };
  return { checkIsLogged };
};

export default useCheckLogin;
