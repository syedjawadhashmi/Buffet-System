/**
 * Created by Admin on 12/28/2016.
 */
import React, { Component } from 'react'

import Navbar from '../navbar/Navbar'

// Tap Plugin
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

export default class App extends Component {



    render () {
        return (
            <div>
                <Navbar/>
                {this.props.children}
            </div>
        )
    }
}
