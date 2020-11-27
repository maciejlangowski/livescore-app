import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
// import ShareButton from "./ShareButton"
import MenuList from './MenuList'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

export default function TemporaryDrawer() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        left: false
    });

    const toggleDrawer = (anchor, open) => (event) => {
        console.log(anchor)
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };


    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            dismissible
        >
            <List>
                <HighlightOffIcon
                    style = {{position: 'relative', left:'210px'}}
                    fontSize = 'large'
                    onClick = {toggleDrawer(anchor, false)}
                />
                <MenuList />
            </List>
        </div>
    );

    return (
        <div>
            
            {['left'].map((anchor) => (
                <IconButton key={anchor} edge="start" className={classes.menuButton} color="inherit" aria-label="menu" >
                    <MenuIcon onClick={toggleDrawer(anchor, true)} />
                    <Drawer anchor={anchor} open={state[anchor]}>
                        {list(anchor)}
                    </Drawer>
                </IconButton>
            ))}
        </div>
    );
}