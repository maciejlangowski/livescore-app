import React from 'react';
import { Redirect } from 'react-router-dom';
import firebase from 'firebase';
import Paper from '@material-ui/core/Paper';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import styles from './styles.module.css';

class SignInGoogle extends React.Component {
    state = {
        isSignedIn: false,
    }

    uiConfig = {
        signInFlow: "popup",
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        
        ],
        callbacks: {
            signInSuccess: () => false
        }
    }
    
    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(user => {
          this.setState({ isSignedIn: !!user })
        })
      }

    render() {
        return (
            <div>
                {
                    this.state.isSignedIn 
                    ? <Redirect to="/livescores" /> 
                    : (
                        <Paper className={styles.paperSignIn}>
                            <StyledFirebaseAuth
                                uiConfig={this.uiConfig}
                                firebaseAuth={firebase.auth()}
                            />
                        </Paper>
                        
                    )
                }
            </div>
        )
    }
}

export default SignInGoogle;