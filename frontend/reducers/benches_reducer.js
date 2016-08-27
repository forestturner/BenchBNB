
import {BenchConstants} from '../actions/bench_actions';
import merge from 'lodash/merge';


const BenchesReducer = (state = {}, action) => {
  switch(action.type){
    case BenchConstants.RECEIVE_BENCHES:
      return action.benches;
      // return merge({},state, {benches: action.benches})
    case BenchConstants.REQUEST_BENCHES:
      return merge({}, state)
    default:
      return state
  }
}

export default BenchesReducer;
