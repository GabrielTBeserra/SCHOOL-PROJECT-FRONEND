import { persistStore } from 'redux-persist';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { composeWithDevTools } from 'redux-devtools-extension';
import rootReduce from './rootReduce';
import rootSaga from './rootSagas';

import persistedReducers from './reducer.persist';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(persistedReducers(rootReduce),
  composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
export default store;
