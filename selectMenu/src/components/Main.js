/**
 * Created by ruslan on 06.10.16.
 */
import React, { Component } from 'react'


export default class Main extends Component{

    render(){

        return(
          <ul>
              <li>
                  <span className="text"></span>
                  <span className="deleteTag">x</span>
              </li>
              ...
          </ul>
        );
    }
}