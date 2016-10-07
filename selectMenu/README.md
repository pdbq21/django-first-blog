src:
    /action:
        // this is all action for selectMenu
        actions.js:
            const nameAction = () => ({
                type: 'NAME_THIS_ACTION_UPPER_CASE'

            })

            or

            const nameAction = value1, value2 => ({
                type: 'NAME_THIS_ACTION_UPPER_CASE'
                value1,
                value2
                // value - argument function
            })
    /components:
        // this is all components for selectMenu
        // save html structuring

        main.js:
            import React, { Component } from 'react'

            export default class Main extends Component{
                render(){
                     return(
                               <ul>
                                    <li>
                                        <span className="text"></span>
                                        <span className="deleteTag">x</span>
                                    </li>
                               </ul>
                            );
                         }
            }
    /containers:
        // this is a