/**
 * Created by ruslan on 06.10.16.
 */
import React from 'react'
import {render} from 'react-dom'

import {Provider} from 'react-redux'
import App from './containers/App'
import configureStore from './store/configureStore'


const store = configureStore();
/*
 class App extends Component{

 render(){
 return (
 <div id='menu-block'>
 <form action="">
 <button type="button" id="clear">Clear</button>
 <input type="text"/>
 <button type="button" id="search">Search</button>
 </form>
 </div>
 );
 }
 }
 */

render(
    <Provider store={store}>
        <div className="App">
            <App />
        </div>
    </Provider>, document.getElementById('root-select-menu')
);