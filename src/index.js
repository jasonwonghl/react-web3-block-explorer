import React from 'react';
import { render }from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './state/store';
import web3Init from './utils/web3';
import App from './containers/App';

import './index.css';

const target = document.querySelector('#root');
// import registerServiceWorker from './registerServiceWorker';

web3Init()
	.then(() => {
		render(
			<Provider store={store}>
				<ConnectedRouter history={history}>
					<div>
						<App />
					</div>
				</ConnectedRouter>
			</Provider>,
			target
		)
	})


// registerServiceWorker();
