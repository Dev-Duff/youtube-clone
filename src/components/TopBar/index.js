import React from 'react';
import { makeStyles, AppBar, Toolbar, IconButton, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle';
import VideoCall from '@material-ui/icons/VideoCall';
import Apps from '@material-ui/icons/Apps';
import MoreVert from '@material-ui/icons/MoreVert';

const useStyles = makeStyles({
    appBar: {
      position: 'fixed',
      backgroundColor: 'white',
      color: 'inherit',
      boxShadow: 'none',
      font: '14px Roboto, Arial, sans-serif '
    },
    grow: {
        flexGrow: 1
    },
    menuButton: {
        paddingRight: 18,
        paddingLeft: 14
    },
    button: {
        height: 40,
        fontWeight: 600,
        borderRadius: 'inherit',
        lineHeight: 'initial'
    },
    icons: {
        paddingRight: 18,
        color: '#606060'
    },
    logo :{
        height: 30
    },
  });

function TopBar() {
    const classes = useStyles();

    return(
        <AppBar position="static" className={classes.appBar}>
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <img alt='logo' src='/images/preto.png' className={classes.logo} />
                <div className={classes.grow}/>
                <IconButton className={classes.icons} >
                    <VideoCall />
                </IconButton>
                <IconButton className={classes.icons} >
                    <Apps />
                </IconButton>
                <IconButton className={classes.icons} >
                    <MoreVert />
                </IconButton>
                <Button startIcon={<AccountCircle />} variant='outlined' color='secondary' className={classes.button}>
                    SIGN IN
                </Button>
            </Toolbar>
        </AppBar>
    )
}

export default TopBar;