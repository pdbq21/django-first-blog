/**
 * Created by ruslan on 06.10.16.
 */
import React, { Component } from 'react'

//??? 1-2 down
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
// components
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

import * as ActionsList from '../actions/actions'

class App extends Component{
    render(){
        //const { text } = this.props;
       // const { actions } = this.props.ActionsList;
        console.log(this.props);
    return <div>
        <Header addTag={3/*actions*/}/>
        <Main listTags={1/*text*/} deleteTag={2/*actions*/}/>
        {/* need add length tags #*/}
        <Footer />
    </div>
    }
}


/*const App = ({tags, actions}) => (
    <div>
        <Header addTag={actions.clickButton}/>
        <Main listTags={tags} deleteTag={actions.clickDeleteTag}/>
        {/!* need add length tags #*!/}
        <Footer />
    </div>
);*/

// give props a state from Store
const mapStateToProps = state => {
    console.log(this);
    return {text: state.text}
};

const mapDispachToProps = dispatch => ({
    ActionsList: bindActionCreators(ActionsList, dispatch)
});


export default connect(
mapStateToProps(),
    mapDispachToProps()
)(App)