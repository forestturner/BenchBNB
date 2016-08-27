// import {createStore, applyMiddleware } from 'redux';
import {createStore} from 'redux';
// import BenchReducer from  '../reducers/bench_reducer';
import RootReducer from '../reducers/root_reducer';
// import BenchMiddleware from '../middle/bench_middleware'
import RootMiddleware from '../middleware/root_middleware';
// const configureStore = (preloadedState = {} ) => (
//   createStore(
//     BenchReducer,
//     preloadedState
//   )
// )
//
// export default configureStore;

const configureStore = (preloadedState = {}) => (
   createStore(
     RootReducer,
     preloadedState,
     RootMiddleware
   )
 );

 export default configureStore;
