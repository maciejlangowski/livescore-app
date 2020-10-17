import React from 'react';
import SignInEmail from './SignInEmail'
import SignInGoogleFacebook from './SignInGoogleFacebook';


class SignIn extends React.Component {
    render() {
        return (
            <div>
                <SignInEmail />
                <hr />
                <SignInGoogleFacebook />
            </div>
        )
    }
}

export default SignIn;