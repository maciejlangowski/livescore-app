import React from 'react';
import firebase from 'firebase';
import Pagewrapper from './Pagewrapper';
import styles from './styles.module.css';
import Paper from '@material-ui/core/Paper';

class Auth extends React.Component {
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
            : <Paper className={styles.paper}>
                <Pagewrapper>
                    <h1>Aby wyświetlić tę stronę, musisz się zalogować</h1>
                </Pagewrapper>
            </Paper>
            
        )
    }
}

export default Auth;