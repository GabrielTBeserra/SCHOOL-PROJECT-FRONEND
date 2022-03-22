import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReduce from './rootReduce';
import rootSaga from './rootSagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReduce, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
