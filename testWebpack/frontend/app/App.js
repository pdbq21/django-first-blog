/**
 * Created by ruslan on 30.09.16.
 */
import React, { Component } from 'react'
import ListItem from './page1'
import styles from '../style/css1.css'

class App extends Component {

   state = {
       articles: ['qwer' , 'asd', 'zxc', 'wer', 'sdf', 'xcv'],
       links: ['../index2.html']
   };


   componentDidMount() {

   }

   render(){
       return(
           <ul className="content-list">
               {this.state.articles.map((article, index) => (
                   <li className="content-list__item" key={index}>
                       <ListItem article={article} index={index}/>
                   </li>
               ))}
           </ul>
       );
   }
}


export default App
