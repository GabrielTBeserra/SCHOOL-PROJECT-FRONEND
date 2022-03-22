import { combineReducers } from 'redux';

import loginReducer from 'src/modules/auth/auth.reducer';
import themeReducer from '../../modules/theme/theme.reducer';
import loaderReducer from '../../modules/loader/loader.reducer';

export default combineReducers({
  theme: themeReducer,
  auth: loginReducer,
  loader: loaderReducer,
});
