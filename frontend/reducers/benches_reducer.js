
import {BenchConstants} from '../actions/bench_actions';
import merge from 'lodash/merge';


const BenchesReducer = function(state = {}, action){
  switch(action.type){
    case BenchConstants.RECEIVE_BENCHES:
      return action.benches;
      // return merge({},state, {benches: action.benches})
      case BenchConstants.RECEIVE_BENCH:
        const newBench = {[action.bench.id]: action.bench};
        return merge({}, state, newBench);
      default:
        return state;
    }
  };

  export default BenchesReducer;




//     case BenchConstants.REQUEST_BENCHES:
//       return merge({}, state)
//     default:
//       return state
//   }
// }
//
// export default BenchesReducer;
