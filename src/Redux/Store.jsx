import { legacy_createStore, compose, combineReducers } from "redux";
import {reducer as data_reducer} from './data_reducer/reducer'
import {reducer as cart_reducer} from './cart_reducer/reducer'

const rootReducers = combineReducers({
  Product: data_reducer,
  Cart: cart_reducer
})


// Redux DevTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// Store
const store = legacy_createStore(rootReducers, composeEnhancers());

export { store }