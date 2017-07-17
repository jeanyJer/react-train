import React from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import VisibleNavTop from './components/NavTop';

const app = document.getElementById('app');
const store = createStore(reducer);

ReactDom.render(
	<Provider store={store}>
		<div>
			<VisibleNavTop />
			<div>
				This is my first app .
			</div>
		</div>
	</Provider>,
	app
);
