import React from 'react';
import SignInEmail from './SignInEmail'
import SignInGoogleFacebook from './SignInGoogleFacebook';
import styles from './styles.module.css';


class SignIn extends React.Component {
    render() {
        return (
            <div className={styles.signInContainer}> 
                <SignInEmail />
                <SignInGoogleFacebook />
            </div>
        )
    }
}

export default SignIn;