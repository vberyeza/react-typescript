import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';
import {
  applyMiddleware,
  createStore,
  Store,
  PreloadedState,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createRootReducer from './reducers';
import staticSagas from './sagas';

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();
const middlewares = [routerMiddleware(history), sagaMiddleware];

export default function configureStore(preloadedState?: PreloadedState<{}>): Store {
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    composeWithDevTools(
      applyMiddleware(
        ...middlewares,
      ),
    ),
  );
  // use the same saga middleware that you have enhanced your store with
  sagaMiddleware.run(staticSagas);
  return store;
}
