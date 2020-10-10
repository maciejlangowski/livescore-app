import React from 'react';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import firebase from 'firebase';

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
            <div>
                <div className='loggedUser'>
                    {this.state.user && `Cześć ${this.state.user.email}`}
                </div>

                {
                    this.state.user
                        ? <Button color='default' variant='contained' onClick={this.handleOnSignOut} >Wyloguj się</Button>
                        : <Button color='default' variant='contained' component={NavLink} to='/signin'>Zaloguj się</Button>
                }

            </div>
        )
    }
}

export default SignInButton;