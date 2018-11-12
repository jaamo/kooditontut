import React from 'react';
import ReactDOM from 'react-dom';
import Game from './containers/Game.js';

ReactDOM.render(<Game />, document.getElementById('app'));

module.hot.accept();
