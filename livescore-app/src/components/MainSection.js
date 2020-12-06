import React from "react";
import clsx from "clsx";
import MenuList from "./MenuList";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Hidden from '@material-ui/core/Hidden';
import Toolbar from "@material-ui/core/Toolbar";
import Button from '@material-ui/core/Button';
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Logo from '../logo/Logo';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styles from './styles.module.css';

import Welcome from './Welcome';
import Livescores from './Livescores';
import Scores from './Scores';
import Standings from './Standings';
import Schedule from './Schedule';
import MyTeams from './MyTeams';
import SignIn from './SignIn';
import SignInButton from './SignInButton'
import SignInEmail from './SignInEmail';
import ButtonAppBar from './MainSectionMobile'

const drawerWidth = 300

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    paddingTop: 0,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    // padding: theme.spacing(4),
  },
}))

export default function MainSection() {
  const classes = useStyles()
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <BrowserRouter className={styles.main}>
      <Hidden xlUp>
        <ButtonAppBar />
      </Hidden>
      
      <div className={classes.root}>
        <Hidden smDown>
          <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
              [classes.appBarShift]: open,
            })}>
            <Toolbar>
              <IconButton
                color="inherit"
                fontSize="large"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, {
                  [classes.hide]: open,
                })}
              >
                <Logo />
              </IconButton>
              <div className="navContainer">
                <div className={styles.header}>Livescore app</div>
                <div className={styles.signInShareButtons}>
                    <SignInButton />
                </div>
              </div>
            </Toolbar>
          </AppBar>
          <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            })}
            classes={{
              paper: clsx({
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
              }),
            }}
          >
            <div className={classes.toolbar}>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'rtl' ? (
                  <ChevronRightIcon />
                ) : (
                    <ChevronLeftIcon />
                  )}
              </IconButton>
            </div>
            <MenuList />
          </Drawer>
        </Hidden>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/livescores" component={Livescores} />
            <Route exact path="/scores" component={Scores} />
            <Route exact path="/schedule" component={Schedule} />
            <Route exact path="/myteams" component={MyTeams} />
            <Route exact path="/standings/:id" component={Standings} />
            
            <Route path='/signin'  component={SignIn}/>
            <Route path='/signup' component={() => <SignInEmail isSignUp />} /> 

          </Switch>
        </main>
      </div>
    </BrowserRouter>
  )
}
