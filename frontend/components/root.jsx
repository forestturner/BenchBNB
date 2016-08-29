
import React from 'react';
import { Provider } from 'react-redux';
import BenchIndexContainer from './bench_index_container';
import BenchIndex from './bench_index';

const Root = ({store}) => (
  <Provider store={store}>
    {BenchIndexContainer}
  </Provider>
);

// const requestAllBenchesOnEnter = () => {
//   store.dispatch(Actions.requestAllBenches());
// }
// const requestSingleBenchOnEnter = () => {
//   store.dispatch(Actions.requestSingleBench(nextState.params.benchId));
// }
//
//   <Provider store={store}>
//     <Router history = {hashHistory}>
//       <Route path="/" component={BenchIndexContainer} onEnter={requestAllBenchesOnEnter}>
//         <IndexRoute component=
//     <BenchIndexContainer/>
//     </Router>
//   </Provider>
// );
//
// export default Root;
//
// // 		store.dispatch(Actions.requestSinglePokemon(nextState.params.pokemonId));
// // 	};
// //
//  	return (
//      		<Provider store={store}>
//  			<Router history={hashHistory}>
//  				<Route path="/" component={PokemonIndexContainer} onEnter={requestAllPokemonOnEnter}>
//  					<IndexRoute component={PokemonFormContainer}/>
//  					<Route 	path="pokemon/:pokemonId"
// // 									component={PokemonDetailContainer} onEnter={requestSinglePokemonOnEnter}>



//
// //{/* <IndexRoute component={BenchFormContainer}/>
// {/* <Route 	path="Bench/:BenchId"
// component={BenchDetailContainer} onEnter={requestSingleBenchOnEnter}>
// </Route> */} */} */}
