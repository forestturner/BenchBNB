

import { connect } from 'react-redux';
import BenchIndex from './bench_index';


const mapStateToProps = state => ({
   benches: state.benches
 });

 const mapDispatchToProps = dispatch => ({
  requestBenches: () => dispatch(requestBenches())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BenchIndex);
