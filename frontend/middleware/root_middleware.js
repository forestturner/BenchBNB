import {applyMiddleware } from 'redux';
import BenchMiddleware from './benches_middleware';

const RootMiddleware = applyMiddleware(
    BenchMiddleware
  );

export default RootMiddleware;
