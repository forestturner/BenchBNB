import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {requestBenches} from './actions/bench_actions';

  window.requestBenches = requestBenches;


	const store = configureStore();
	window.store = store;
document.addEventListener('DOMContentLoaded', () => {
	const store = configureStore();

	const root = document.getElementById('root');
	ReactDOM.render(<Root store={store}/>, root);

});
