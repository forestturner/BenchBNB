import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';


const Store = configureStore();
document.addEventListener('DOMContentLoaded', () => {
	const Store = configureStore();

	const root = document.getElementById('root');
	ReactDOM.render(<Root store={store}/>, root);
	// ReactDOM.render(<h1>Hello</h1>,root);
});
