/**
 * Created by ruslan on 30.09.16.
 */
import React, { Component } from 'react'


class ListItem extends Component {

   render(){
       return(
           <p>Test:<span>{this.props.article}</span></p>
       );
   }
}


export default ListItem




