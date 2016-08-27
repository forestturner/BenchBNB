import { BenchConstants } from '../actions/bench_actions';
import { fetchAllBenches } from '../util/api_util';


const BenchesMiddleware = ({getState, dispatch}) => next => action => {
  switch(action.type){
    case BenchConstants.REQUEST_BENCHES:
      const success = data => dispatch(receiveBenches(data))
      fetchBenches(success);
      break;
    default:
      next(action);
  }
}

export default BenchesMiddleware;


// /home/forest/Development/BenchBnB/frontend/util/api_util.js
// /home/forest/Development/BenchBnB/frontend/middleware/benches_middleware.js
