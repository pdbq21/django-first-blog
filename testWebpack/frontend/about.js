/**
 * Created by ruslan on 30.09.16.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import welcome from './welcome';

import App from './app/App';


welcome('home');
let b = 25;
let g = b;
alert(g);

ReactDOM.render(
    <App />, document.getElementById('root')
);