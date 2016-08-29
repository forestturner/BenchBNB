import React from 'react';
import BenchIndexItem from './bench_index_item';


class BenchIndex extends React.Component{
   componentDidMount(){
     this.props.requestBenches();
     // request benches from your API here
   }

  //  t.string   "description"
  //  t.float    "lat"
  //  t.float    "lng"


   render()
   {
     const {benches} = this.props;
     return(
      <div>
      {benches && benches.map( (bench) => {
        return (<BenchIndexItem key = {bench.id} bench={bench}/>);
      })}

      </div>
     )
   }

 }
export default BenchIndex;
// const BenchIndex = ({benches, children}) => {
//   return (
//     <section className ="bench">
//       <ul>
//         {benches && benches.map( (bench) => {
//           return (<BenchIndexItem key = {bench.id} bench={bench}/>);
//         })}
//       </ul>
//         }
//         {children}
//     </section>
//   );
// };


// import React from 'react';
// import PokemonIndexItem from './index_item';
//
// const PokemonIndex = ({ pokemon, loading, children }) => {
// 	if (loading) {
// 		return (<img
// 							src="http://orig15.deviantart.net/4317/f/2015/094/c/c/pokeball_by_watolf-d8ogz4y.gif"
// 							alt="pokemon loading"
// 						/>);
// 	}
//
// 	return (
// 		<section className="pokedex">
// 			<ul>
// 				{pokemon && pokemon.map((poke)=> {
// 					return (<PokemonIndexItem key={poke.id} pokemon={poke}/>);
// 				})}
// 			</ul>
//
// 			{children}
// 		</section>
// 	);
// };
//
// export default PokemonIndex;
