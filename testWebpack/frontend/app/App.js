/**
 * Created by ruslan on 30.09.16.
 */
import React, { Component } from 'react'
import ListItem from './page1'


class App extends Component {

   state = {
       articles: ['qwer' , 'asd', 'zxc', 'wer', 'sdf', 'xcv']
   };


   componentDidMount() {

   }

   render(){
       return(
           <ul className="content-list">
               {this.state.articles.map((article, index) => (
                   <li className="content-list__item" key={index}>
                       <ListItem article={article} />
                   </li>
               ))}
           </ul>
       );
   }
}


export default App
