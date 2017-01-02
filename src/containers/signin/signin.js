import React, { Component, PropTypes } from 'react'

import { authActions } from '../../action/auth';
// Components
import LoginForm from '../../components/signinform/signinform'
import Paper from 'material-ui/Paper'
import CircularProgress from 'material-ui/CircularProgress'
import Snackbar from 'material-ui/Snackbar'
import RaisedButton from 'material-ui/RaisedButton'

// redux/firebase
import { connect } from 'react-redux'

class signin extends Component {

 static propTypes = {
      auth: PropTypes.object.isRequired,
    signInWithCustom: PropTypes.func.isRequired
  }



 // Redirect when logged in
  componentWillReceiveProps (nextProps) {
  console.log(nextProps)
  // const { router } = this.context;
  //   const { auth } = this.props;

  //   if (auth.authenticated && !nextProps.auth.authenticated) {
  //     router.replace(paths.SIGN_IN);
  //   }
  //   else if (!auth.authenticated && nextProps.auth.authenticated) {
  //     router.replace(paths.TASKS);
  //   }
  }

  handleLogin = (loginData) => {
    this.props.signInWithCustom(loginData)
  }


  render () {
      
    return (
      <div className='Login'>
        <Paper className='Login-Panel'>
          <LoginForm onLogin={this.handleLogin} />
        </Paper>
    
      </div>
    )
  }
}



//=====================================
//  CONNECT
//-------------------------------------


const mapStateToProps = (state) => {
  console.log(state)
	return { auth: state };
};

export default connect(mapStateToProps, authActions)(signin);