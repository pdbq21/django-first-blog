/**
 * Created by ruslan on 10.10.16.
 */

// import
import React from 'react'
import ReactDOM from 'react-dom'

// end import

// data base / State
const Data = {

    Theme: {
        Name: '',
        Description: ''
    },
    Group: {
        Name: ''
    },
    Issue: {
        Name: ''
    },
    Search: {
        Name: '',
        Main_Query: ''
    },
    Article: {
        Title: '',
        Body: ''
    }

};
// end data base


// view search

/******************** view Articles ***********************/
class SearchArticles extends React.Component {
// export in SearchResultView point 2.
    render() {


        return (
            <div className="">

                {/* 1. name 'Articles'*/}

                {/* end 1. */}
                {/* 2. list items this category */}

            </div>

        );
    }

}
/******************* .end view Articles *******************/

/**************** name category *******************/
class DivNameCategory extends React.Component {
// export in SearchResultCategory point 1.
    render() {

        return (
            <div className="">
                {/* name category + (Found # items)*/}
                {/* button 'View All'*/}
            </div>
        )
    }
}
/******************* .end name category *****************/

/********************* element list found ***********************/
class ElementListFound extends React.Component {
// export in ListItemsFound point 1.

    render() {

        return (
            <li>
                {/* string */}
                {/* button 'View' */}
            </li>
        )

    }
}
/***************** .end element list found *******************/

/***************** list items found ***********************/
class ListItemsFound extends React.Component {

    render() {

        return (
            <ul>
                {/* 1. element list */}

                {/* end 1. */}
            </ul>
        )
    }
}
/***************** .end list items found ******************/

/****************** view block category *****************************/
class SearchResultCategory extends React.Component {
//export in SearchResultView point 1.

    render() {

        return (
            <div className="">

                {/* 1. name category */}

                {/* end 1.*/}
                {/* 2. found list items this category */}

                {/* end 2. */}
            </div>

        );
    }
}

/****************** .end view block category *****************************/

/**************** view search result block *****************/
class SearchResultView extends React.Component {
// export in App point 1.

    render() {

        return (

            <div className="">
                {/* 1. element category*/}

                {/* end 1.*/}
                {/* 2. element articles */}

                {/* end 2.*/}
            </div>

        );
    }
}
/******************** .end view search result block *************************/

/********************** view root element ************************************/
class App extends React.Component {


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


    constructor(props) {
        super(props);
        this.state = {
//getInitialState


        }
    }

    componentWillMount() {

    }

    render() {
        return (
            <div>
                <form action="">
                    <input type="text"/>
                    <button className="search">Search</button>

                </form>
                {/* 1. view search result */}
                {/* <SearchResultView /> */}
                {/* end 1. */}
            </div>
        );
    }
}
/********************** .end view root element ************************************/
// end view search


ReactDOM.render(
    <App />, document.getElementById('root')
);
