import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
// Components
import AppBar from 'material-ui/AppBar'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import FlatButton from 'material-ui/FlatButton'
import Avatar from 'material-ui/Avatar'



export default class Navbar extends Component {




  render () {

    return (
      <AppBar
        title={
          <Link to='/'>
            Sj React App
          </Link>
        }
      />
    )
  }
}
