import React from 'react';
import { NavLink } from 'react-router-dom';

import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from '@material-ui/core/Typography';
import styles from './styles.module.css'


import firebase from 'firebase';

class Navigation extends React.Component {
    state = {
        user: null
    }

    render() {
        return(
            <AppBar position='static'>
                <Toolbar>
                    {/* <div className="appbar">
                        <Button color="inherit" component={NavLink} to='/'>Home</Button>
                        <Button color="inherit" component={NavLink} to='/livescores'>Livescores</Button>
                        <Button color="inherit" component={NavLink} to='/scores'>Scores</Button>
                        <Button color="inherit" component={NavLink} to='/teams'>Teams</Button>
                        {
                           this.state.user && <Button color="inherit" component={NavLink} to='/myteams'>My Teams</Button>
                        }
                    </div> */}
                    <div className={styles.toolbar}>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6">
                            <span className={styles.title}>Livescore</span>
                        </Typography>
                        {
                            this.state.user
                            ? <Button color="secondary" variant='contained' onClick={this.handleOnSignOutClick}>Sign Out</Button>
                            : <Button color="inherit" component={NavLink} to='/signin'>Sign In</Button>
                        }
                    </div>
                    
                </Toolbar>
                
            </AppBar>
            
        )
    }
}

export default Navigation

