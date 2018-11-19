import React from 'react';
import ReactDOM from 'react-dom';
import Game from './containers/Game.js';
import Store from './stores/store.js';

const store = new Store();

ReactDOM.render(<Game store={store} />, document.getElementById('app'));

module.hot.accept();
