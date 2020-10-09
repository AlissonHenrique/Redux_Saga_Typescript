import { ICartState } from './modules/cart/types';
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore ,applyMiddleware} from "redux";
import rootReducer from "./modules/rootReducer";
import rootSaga from './modules/rootSaga';
import createSagaMiddleware from 'redux-saga';

export interface IState {
  cart:ICartState
}
const sagaMiddleware = createSagaMiddleware()

const middlewares =[sagaMiddleware]
const store = createStore(rootReducer,composeWithDevTools(
  applyMiddleware(...middlewares)
));

 sagaMiddleware.run(rootSaga)

export default store;
