// Bench API Util
import { fetchBenches,
         fetchBench,
         createReview,
         createBench
       } from '../util/api_util';
// Bench Action
import { requestBenches,
         receiveBench,
         receiveBenches,
         BenchConstants
       } from '../actions/bench_actions';

const BenchesMiddleware = ({getState, dispatch}) => next => action => {
  switch(action.type){
    case BenchConstants.REQUEST_BENCHES:
      const success = data => dispatch(receiveBenches(data))
      fetchAllBenches(success);
      break;
    default:
      next(action);
  }
}

export default BenchesMiddleware;


// /home/forest/Development/BenchBnB/frontend/util/api_util.js
// /home/forest/Development/BenchBnB/frontend/middleware/benches_middleware.js
