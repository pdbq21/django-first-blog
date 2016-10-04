/**
 * Created by ruslan on 04.10.16.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'

class App extends Component{
    render() {
        return (
          <div className="">
              App create {this.props.user}!
          </div>
        );
    }
}

function mapStateToProps (state){
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(App)

/*
Note:
    ? connect
    ?
 */