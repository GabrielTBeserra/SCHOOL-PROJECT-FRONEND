import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from 'src/base/store/store';
import { GlobalStyles } from 'src/globalStyles';
import ThemeContext from 'src/styles/ThemeContext';
import AutoLogout from './common/components/auth/AuthControl';
import Routes from './routes';
import Loader from './common/components/loader/Loader';

function App() {
  return (
    <Provider store={store}>
      <ThemeContext>
        <Loader />
        <GlobalStyles />
        <BrowserRouter>
          <AutoLogout />
          <Routes />
        </BrowserRouter>
      </ThemeContext>
    </Provider>
  );
}

export default App;
