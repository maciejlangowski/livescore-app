import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SignInButton from './SignInButton';
import TemporaryDrawer from './MobileDrawer'
import styles from './styles.module.css'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    
}));



export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar>
                    <TemporaryDrawer />
                    <Typography variant="h6" className={classes.title}>
                        <div className={styles.livescoreApp}>
                            LIVESCORE APP
                        </div>
                    </Typography>
                    <SignInButton />
                </Toolbar>
            </AppBar>

        </div>
    );
}
