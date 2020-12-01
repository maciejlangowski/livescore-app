import React from 'react';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import firebase from 'firebase';
import styles from './styles.module.css';

class SignInButton extends React.Component {
    state = {
        user: null
    }

    handleOnSignOut = () => {
        firebase.auth().signOut();
    }

    componentDidMount() {
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
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
        return (
            <div className={styles.userDiv}>
                <div className={styles.loggedUser}>
                    {
                        this.state.user &&`Hello, ${firebase.auth().currentUser.displayName}`
                    }
                </div>
                
                {
                    this.state.user
                        ? <Button color='default' variant='contained' onClick={this.handleOnSignOut}>Sign Out</Button>
                        : <Button color='default' variant='contained' component={NavLink} to='/signin'>Sign In</Button>
                }

            </div>
        )
    }
}

export default SignInButton;