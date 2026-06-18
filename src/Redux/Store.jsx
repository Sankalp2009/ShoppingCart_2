import { legacy_createStore, compose } from "redux";
import {reducer as data_reducer} from './data_reducer/reducer'

// Redux DevTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// Store
const store = legacy_createStore(data_reducer, composeEnhancers());

export { store }