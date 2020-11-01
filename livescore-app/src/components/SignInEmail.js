import React from 'react';
import { Redirect, Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import firebase from 'firebase';
import styles from './styles.module.css';

class SignInEmail extends React.Component {
    state = {
        email: '',
        password: '',
        redirect: false
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();

        if (this.props.isSignUp) {
            firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
                .then((userData) => {
                    this.setState({
                        redirect: true
                    })
                    console.log(userData)
                })
                .catch((error) => {
                    if(error.code === "auth/weak-password") {
                        alert("Podane hasło jest za krótkie - musi się ono składać z minimum 6 znaków.")
                    } else if (error.code === "auth/invalid-email") {
                        alert("Podano błędny adres e-mail.")
                    } else {
                        alert(error.message)
                    }

                })
        } else {
            firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
                .then((userData) => {
                    this.setState({
                        redirect: true
                    })
                    console.log(userData)
                })
                .catch((error) => {
                    if(error.code === "auth/user-not-found") {
                        alert("This user doesn't exist. If you want to log in - please sign up first.")
                    } else if (error.code === "auth/wrong-password") {
                        alert("This password is wrong.")
                    } else if (error.code === "auth/invalid-email") {
                        alert("This email address is wrong.")
                    } else {
                        alert(error.message)
                    }
            
                })
        }
    }
    
    render() {
        if(this.state.redirect) {
            return <Redirect to="/livescores" />
        }

        return (
            <div className={styles.divSignIn}>
                <Paper>
                    <Container className={styles.containerSignIn} component="main" maxWidth="xs">
                    <h1 className={styles.loginHeader}>
                        {
                            this.props.isSignUp
                            ? "Sign Up"
                            : "Sign In"
                        }
                    </h1>
                        <form noValidate onSubmit={this.handleOnSubmit}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                onChange={this.handleOnChange}
                                value={this.state.email}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={this.handleOnChange}
                                value={this.state.password}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                            >
                                {this.props.isSignUp ? "Sign Up" : "Sign In"}
                                
                            </Button>
                            <Grid container>
                                    <Link href="#" variant="body2">
                                        {
                                            this.props.isSignUp
                                            ? <Link to='/signin'>Already have an account? Sign In! </Link>
                                            : <Link to='/signup'>Don't have an account yet? Sign Up! </Link>
                                        }
                                    </Link>
                            
                            </Grid>
                        </form>
                    </Container>
                </Paper>
            </div>
            
            
            
        )
    }
}

export default SignInEmail;

