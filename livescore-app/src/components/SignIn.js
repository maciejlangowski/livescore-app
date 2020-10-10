import React from 'react';
import SignInEmail from './SignInEmail'
import SignInGoogle from './SignInGoogle';
// import SignInFacebook from './SignInFacebook';

class SignIn extends React.Component {
    render() {
        return (
            <div>
                <SignInEmail />
                <hr />
                <SignInGoogle />
                {/* <hr />
                <SignInFacebook /> */}
            </div>
        )
    }
}

export default SignIn;