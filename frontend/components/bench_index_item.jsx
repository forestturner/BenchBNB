import React from 'react';
import { withRouter } from 'react-router';

const handleClick = (router, url) => (
  () => router.push(url)
);

const BenchIndexItem = ({ bench}) => (
  <li className="bench-index-item">
			<span>{bench.id}</span>
      <span>{bench.name}</span>
			<span>{bench.lat}</span>
      <span>{bench.lng}</span>
		</li>
);

export default withRouter(BenchIndexItem);




//onClick={handleClick(router, `/bench/${bench.id}`)}>
