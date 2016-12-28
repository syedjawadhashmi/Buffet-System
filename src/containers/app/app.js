/**
 * Created by Admin on 12/28/2016.
 */
import React, { Component } from 'react'



// Tap Plugin
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

export default class App extends Component {



    render () {
        return (
            <div>
                <h1>welcome to React App</h1>
                {this.props.children}
            </div>
        )
    }
}
