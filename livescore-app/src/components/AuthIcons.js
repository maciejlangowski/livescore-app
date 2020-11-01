import React from 'react';
import firebase from 'firebase';

class AuthIcons extends React.Component {
    state = {
        user: null
    }

    componentDidMount() {
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            this.setState({
                user
            })
        })
        this.setState({
            unsubscribe
        })
    }

    componentWillUnmount() {
        this.state.unsubscribe();
    }

    render() {
        return(
            this.state.user
            ? this.props.children
            : <div></div>
        )
    }
}

export default AuthIcons;