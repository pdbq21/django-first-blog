/**
 * Created by ruslan on 06.10.16.
 */
import React from 'react'

//??? 1-2 down
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

import * as ActionsList from '../actions/actions'

const App = ({tags, actions}) => (
    <div>
        <Header addTag={actions.clickButton}/>
        <Main listTags={tags} deleteTag={actions.clickDeleteTag}/>
        {/* need add length tags #*/}
        <Footer />
    </div>
);

// give props a state from Store
const mapStateToProps = state => ({
    tags: state.tags
});

const mapDispachToProps = dispatch => ({
    actions: bindActionCreators(ActionsList, dispatch)
});


export default connect(
mapStateToProps(),
    mapDispachToProps()
)(App)