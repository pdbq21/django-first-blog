/**
 * Created by ruslan on 30.09.16.
 */
import React, { Component } from 'react'


class ListItem extends Component {

    state = {
    links: ['../publish/index2.html', '../publish/index3.html', '../publish/index4.html']
    };

   render(){
       return(
           <p>Test:<a href={this.state.links[this.props.index]}>{this.props.article}</a></p>
       );
   }
}


export default ListItem




