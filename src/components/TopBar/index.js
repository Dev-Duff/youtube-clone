import React from 'react';
import { makeStyles, AppBar, Toolbar, IconButton, Button, Switch  } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle';
import VideoCall from '@material-ui/icons/VideoCall';
import Apps from '@material-ui/icons/Apps';
import MoreVert from '@material-ui/icons/MoreVert';

import { useTheme } from '@material-ui/core/styles';

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
        lineHeight: 'initial',
        color: '#065FD4',
        borderColor: '#065FD4'
    },
    icons: {
        paddingRight: 18,
        color: '#606060'
    },
    logo :{
        height: 30,
        cursor: 'pointer'
    },
  });

function TopBar({darkMode, setDarkMode}) {
    const theme = useTheme();

    const classes = useStyles();

    return(
        <AppBar 
            position="static" 
            className={classes.appBar} 
            style={{ backgroundColor: theme.palette.background.drawer, color: theme.palette.background.text}}
            >
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <img alt='logo' src={theme.palette.background.logo} className={classes.logo}/>
                <div className={classes.grow}/>
                <Switch 
                    value={'darkMode'} 
                    onChange={() => setDarkMode(!darkMode)} 
                    className={classes.icons}
                    style={{color: 'white'}}
                />
                <IconButton className={classes.icons} style={{color: theme.palette.background.icons}}>
                    <VideoCall />
                </IconButton>
                <IconButton className={classes.icons} style={{color: theme.palette.background.icons}}>
                    <Apps />
                </IconButton>
                <IconButton className={classes.icons} style={{color: theme.palette.background.icons}}>
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