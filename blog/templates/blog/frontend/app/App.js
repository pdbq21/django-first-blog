/**
 * Created by ruslan on 03.10.16.
 */
/*
* <Header>
*     <Logo />
*     <Login />
*
* </Header>
* <Nav>
*<LinkHome />
* <LinkPage1 />
*     <LinkPage2 />
*     <LinkPage3 />
*     <LinkPage4 />
*     <LinkPage5 />
*     <LinkPage6 />
*
*     </Nav>
*
* <Main>
*<ComponentListPost>
*     <ComponentPost />
*     <ComponentListPost />
*
*     <ComponentSideBarNav />
*
*     </Main>
*
*
*   <Footer>
*<ComponentLinks />
* <ComponentContactInfo />
* <Date />
*   </Footer>
* */

import React from 'react'

class App extends React.Component{

    //ES7
static propTypes = {
// Example:
//      title: React.PropTypes.string.isRequired,
//      price: React.PropTypes.number.isRequired,
};

static defaultProps = {
// Example:
//      title: defaultTitle
//      price: defaultPrice
};



    constructor(props){
        super(props);
        this.state = {
//getInitialState


        }
    }

    componentWillMount(){

    }

    render(){
        return (
          <div>

          </div>
        );
    }
}
// ES6
//App.propTypes = {
// Example:
//      title: React.PropTypes.string.isRequired,
//      price: React.PropTypes.number.isRequired,
//};

//App.defeultProps = {
// Example:
//      title: defaultTitle
//      price: defaultPrice
//};


React.render(
    <App />, document.getElementById('root')
);
