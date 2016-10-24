/**
 * Created by ruslan on 06.10.16.
 */
import React, { PropTypes, Component } from 'react'
//import ReactDOM from 'react-dom'

class App extends Component{

    render(){

        const { tags } = this.props;

        return (
          <div id='menu-block'>
              <form action="">
                  <button type="button" id="clear">Clear</button>
                  <input type="text"/>
                  <button type="button" id="search">Search</button>
              </form>
              {/*tags*/}
          </div>
        );
    }
}


export default App
/*
ReactDOM.render(
    <App />, document.getElementById('root-select-menu')
);*/