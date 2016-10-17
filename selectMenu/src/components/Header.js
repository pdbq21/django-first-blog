/**
 * Created by ruslan on 06.10.16.
 */
import React, { Component } from 'react'
//import ReactDOM from 'react-dom'

class App extends Component{

    render(){

        const { HTML_ListTag } = this.props;

        return (
          <div id='menu-block'>
              <form action="">
                  <button type="button" id="clear">Clear</button>
                  <input type="text"/>
                  <button type="button" id="search">Search</button>
              </form>
              {HTML_ListTag}
          </div>
        );
    }
}


export default App
/*
ReactDOM.render(
    <App />, document.getElementById('root-select-menu')
);*/