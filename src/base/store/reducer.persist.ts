import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers: any) => {
  const persistedReducers = persistReducer({
    key: 'SCHOOL-PROJECT',
    storage,
    whitelist: [''],
  }, reducers);

  return persistedReducers;
};
