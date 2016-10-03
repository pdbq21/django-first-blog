/**
 * Created by ruslan on 29.09.16.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import welcome from './welcome';

import App from './app/App';


welcome('home');
let a = 25;
let c = a;
alert(c);

ReactDOM.render(
    <App />, document.getElementById('root')
);