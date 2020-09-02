import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';

import auth from './redux/reducers/auth';

const sagaMiddleware = createSagaMiddleware();
export default createStore(combineReducers({
    // auth,
}), applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
