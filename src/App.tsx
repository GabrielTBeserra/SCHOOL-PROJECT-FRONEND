import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store, { persistor } from 'src/base/store/store';
import { GlobalStyles } from 'src/globalStyles';
import { PersistGate } from 'redux-persist/integration/react';
import ThemeContext from 'src/styles/ThemeContext';
import AutoLogout from './common/components/auth/AuthControl';
import Routes from './routes';
import Loader from './common/components/loader/Loader';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeContext>
          <Loader />
          <GlobalStyles />
          <BrowserRouter>
            <AutoLogout />
            <Routes />
          </BrowserRouter>
        </ThemeContext>
      </PersistGate>
    </Provider>
  );
}

export default App;
