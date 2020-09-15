import React from 'react';
import { 
  makeStyles, 
  Toolbar, 
  List, 
  Divider, 
  ListItem, 
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
  Button,
  ListSubheader,
  Hidden

} from '@material-ui/core';

import WhatshotIcon from '@material-ui/icons/Whatshot';
import HomeIcon from '@material-ui/icons/Home';

import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';

import AccountCircle from '@material-ui/icons/AccountCircle';
import AddCircle from '@material-ui/icons/AddCircle';

import YouTubeIcon from '@material-ui/icons/YouTube';
import RssFeedIcon from '@material-ui/icons/RssFeed';

import SettingsIcon from '@material-ui/icons/Settings';
import FlagIcon from '@material-ui/icons/Flag';
import HelpIcon from '@material-ui/icons/Help';
import FeedbackIcon from '@material-ui/icons/Feedback';

import { useTheme } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles({
    drawer: {
        // zIndex: '9999',
        width: drawerWidth,
        flexShrink: 0,

      },
      drawerPaper: {
        width: drawerWidth,
        borderRight: 'none'
      },
      containerOverflow: {
         
      },
      // overflow: {
      //   width: 8,
      //   height: 300,
      //   zIndex: '99999999',
      //   backgroundColor: 'red',
      //   position: "relative",
      //   float: 'right'
      // },
      listItem: {
        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft: 24
      },
      listItemText: {
        fontSize: 14
      },
      divider: {
        marginTop: 6,
        marginBottom: 8
      },
      button: {
        height: 40,
        fontWeight: 600,
        borderRadius: 'inherit',
        lineHeight: 'initial',
        color: '#065FD4',
        borderColor: '#065FD4'
    },
    iconImg: {
      borderRadius: "50%",
      height: 24
    },
    subheader: {
      textTransform: 'upperCase',
      fontWeight: 600,
      paddingLeft: 24,
      fontFamily: 'Roboto, Arial, sans-serif'
    },
    
  });

function Drawer() {
    const theme = useTheme();

    const classes = useStyles();

    return(
          <Hidden mdDown >
            <div
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <Toolbar />
            {/* <div className={classes.containerOverflow}>
              <div className={classes.overflow} />
            </div> */}
            <div className={classes.drawerContainer} style={{ backgroundColor: theme.palette.background.drawer, color: theme.palette.background.text}}>
              <List>
                  <ListItem button classes={{root: classes.listItem}}>
                    <ListItemIcon>{<HomeIcon/>}</ListItemIcon>
                    <ListItemText 
                    classes={{
                      primary: classes.listItemText
                    }} primary={'Home'} />
                  </ListItem>

                  <ListItem button classes={{root: classes.listItem}}>
                    <ListItemIcon>{<WhatshotIcon />}</ListItemIcon>
                    <ListItemText 
                    classes={{
                      primary: classes.listItemText
                    }} primary={'Trending'} />
                  </ListItem>

                  <ListItem button classes={{root: classes.listItem}}>
                    <ListItemIcon>{<SubscriptionsIcon />}</ListItemIcon>
                    <ListItemText 
                    classes={{
                      primary: classes.listItemText
                    }} primary={'Subscriptions'} />
                  </ListItem>
              
                  <Divider classes={{root: classes.divider}} />
                  <ListItem button classes={{root: classes.listItem}}>
                    <ListItemIcon>{<VideoLibraryIcon />}</ListItemIcon>
                    <ListItemText 
                    classes={{
                      primary: classes.listItemText
                    }} primary={'Library'} />
                  </ListItem>

                  <ListItem button classes={{root: classes.listItem}}>
                    <ListItemIcon>{<HistoryIcon />}</ListItemIcon>
                    <ListItemText 
                    classes={{
                      primary: classes.listItemText
                    }} primary={'History'} />
                  </ListItem>
                </List>
                <Divider classes={{root: classes.divider}}/>
                <Box p={2}>
                    <Typography variant='body2'>
                      Sign in to like videos, comment, and subscribe.
                    </Typography>
                    <Box mt={2}>
                      <Button 
                      size='large'
                      variant='outlined'
                      color='secondary'
                      className={classes.button}
                      startIcon={<AccountCircle />}
                    >                      
                        SIGN IN
                      </Button>
                    </Box>
                </Box>
                <Divider classes={{root: classes.divider}}/>
                <List
                    component='nav'
                    aria-labelledby='nested-list-subheader'
                    subheader={
                      <ListSubheader
                        component='div'
                        id='nested-list-subheader'
                        className={classes.subheader}
                      >
                        best of youtube
                      </ListSubheader>
                    }
                  >
                    <ListItem button classes={{ root: classes.listItem }}>
                      <ListItemIcon>
                        <img alt='Music' className={classes.iconImg}
                        src='https://yt3.ggpht.com/oMfczASm7pydfa9y4lnbO-AXsnrp_QvbZhwKQxd_9k9NfEXKP2oytCKZiLETfLIAIvjvqTuv=s88-c-k-c0xffffffff-no-nd-rj' />
                      </ListItemIcon>
                      <ListItemText
                        classes={{
                          primary: classes.listItemText,
                        }}
                        primary={'Music'}
                      />
                    </ListItem>
                    <ListItem button classes={{ root: classes.listItem }}>
                      <ListItemIcon>
                        <img alt='Sports' className={classes.iconImg}
                        src='https://yt3.ggpht.com/ZbZnq9hTcwML_AExOsTC9PDZ-_ghzxnFxlXmwJIb8JqF5ZGOzJkUXyac0ret1brZKkjH-mVxFWw=s88-c-k-c0xffffffff-no-nd-rj' />
                      </ListItemIcon>
                      <ListItemText
                        classes={{
                          primary: classes.listItemText,
                        }}
                        primary={'Sports'}
                      />
                    </ListItem>
                    <ListItem button classes={{ root: classes.listItem }}>
                      <ListItemIcon>
                        <img alt='Gaming' className={classes.iconImg}
                        src='https://yt3.ggpht.com/9yah1pcRO1Jz317tlaXAzRCYnNDkcoXkI-gP8nMCGoOnY6gra9mjt1BGdRsftumNyWEsLh0zag=s88-c-k-c0xffffffff-no-nd-rj' />
                      </ListItemIcon>
                      <ListItemText
                        classes={{
                          primary: classes.listItemText,
                        }}
                        primary={'Gaming'}
                      />
                    </ListItem>
                    <ListItem button classes={{ root: classes.listItem }}>
                      <ListItemIcon>
                        <img alt='Movies' className={classes.iconImg}
                        src='https://yt3.ggpht.com/6lo97rUTO7xhIBXZqLiaW2kA_eMBIEmqc27EqlKLyE4nAY-yzcKBG0Hs0YdUka3gJ629HcwgyzQ=s88-c-k-c0xffffffff-no-nd-rj' />
                      </ListItemIcon>
                      <ListItemText
                        classes={{
                          primary: classes.listItemText,
                        }}
                        primary={'Movies'}
                      />
                    </ListItem>
                    <ListItem button classes={{ root: classes.listItem }}>
                      <ListItemIcon>
                        <img alt='News' className={classes.iconImg}
                        src='https://yt3.ggpht.com/pG7Ph-r8Ti14EgMy9VnPbV4SXHoqFr5SHfMIaO4JilUwGYdGiBGirB9V8on7dutlC3fwVXSp=s88-c-k-c0xffffffff-no-nd-rj' />
                      </ListItemIcon>
                      <ListItemText
                        classes={{
                          primary: classes.listItemText,
                        }}
                        primary={'News'}
                      />
                    </ListItem>
                    <ListItem button classes={{ root: classes.listItem }}>
                      <ListItemIcon>
                        <img alt='Live' className={classes.iconImg}
                        src='https://yt3.ggpht.com/8D6JlsnvwDZFMdcbjqVji82kggP3aXXbO-yBD0RFrKlp4G1zNt9wcqcVTSPnAI8GuUAbDYQwsg=s88-c-k-c0xffffffff-no-nd-rj' />
                      </ListItemIcon>
                      <ListItemText
                        classes={{
                          primary: classes.listItemText,
                        }}
                        primary={'Live'}
                      />
                    </ListItem>
                    <ListItem button classes={{ root: classes.listItem }}>
                      <ListItemIcon>
                        <img alt='Learning' className={classes.iconImg}
                        src='https://yt3.ggpht.com/Ao4RRV5bVyXrOf8nOznsn9MEJN2Cp-38dM2l2B1ljE094rh96x4UAqVqW63Ke_ccVo-WbbjTBQ=s88-c-k-c0xffffffff-no-nd-rj' />
                      </ListItemIcon>
                      <ListItemText
                        classes={{
                          primary: classes.listItemText,
                        }}
                        primary={'Learning'}
                      />
                    </ListItem>
                    <ListItem button classes={{ root: classes.listItem }}>
                      <ListItemIcon>
                        <img alt='Spotlight' className={classes.iconImg}
                        src='https://yt3.ggpht.com/a/AATXAJwKmpSQWcWOg4aEJI79mytStYZ-ikqTjOnXboM9rQ=s88-c-k-c0xffffffff-no-rj-mo' />
                      </ListItemIcon>
                      <ListItemText
                        classes={{
                          primary: classes.listItemText,
                        }}
                        primary={'Spotlight'}
                      />
                    </ListItem>
                    <ListItem button classes={{ root: classes.listItem }}>
                      <ListItemIcon>
                        <img alt='360° Video' className={classes.iconImg}
                        src='https://yt3.ggpht.com/55ZkCQ5CrJ_Mmkcf2lm2G8MrHe9Hmk_Uii88G_Qeive0XaE7ELi1lGPRt-RZPjy9Ng0mGhSaBQ=s88-c-k-c0xffffffff-no-nd-rj' />
                      </ListItemIcon>
                      <ListItemText
                      classes={{
                        primary: classes.listItemText,
                      }}
                      primary={'360° Video'}
                    />
                    </ListItem>
                  </List>
                  <Divider classes={{root: classes.divider}}/>
                  <Box mt={1} mb={1}>
                    <ListItem button classes={{ root: classes.listItem }}>
                      <ListItemIcon>
                        <AddCircle />
                      </ListItemIcon>
                      <ListItemText
                        classes={{
                          primary: classes.listItemText,
                        }}
                        primary={'Browse channels'}
                      />
                    </ListItem>
                  </Box>
                  <Divider classes={{root: classes.divider}}/>
                  <ListSubheader
                        component='div'
                        id='nested-list-subheader'
                        className={classes.subheader}
                      >
                        more from youtube
                  </ListSubheader>
                  <ListItem button classes={{root: classes.listItem}}>
                    <ListItemIcon>{<YouTubeIcon/>}</ListItemIcon>
                    <ListItemText 
                    classes={{
                      primary: classes.listItemText
                    }} primary={'Youtube Premium'} />
                  </ListItem>

                  <ListItem button classes={{root: classes.listItem}}>
                    <ListItemIcon>{<RssFeedIcon/>}</ListItemIcon>
                    <ListItemText 
                    classes={{
                      primary: classes.listItemText
                    }} primary={'Live'} />
                  </ListItem>
                  <Divider classes={{root: classes.divider}}/>

                  <ListItem button classes={{root: classes.listItem}}>
                    <ListItemIcon>{<SettingsIcon/>}</ListItemIcon>
                    <ListItemText 
                    classes={{
                      primary: classes.listItemText
                    }} primary={'Settings'} />
                  </ListItem>

                  <ListItem button classes={{root: classes.listItem}}>
                    <ListItemIcon>{<FlagIcon/>}</ListItemIcon>
                    <ListItemText 
                    classes={{
                      primary: classes.listItemText
                    }} primary={'Report history'} />
                  </ListItem>

                  <ListItem button classes={{root: classes.listItem}}>
                    <ListItemIcon>{<HelpIcon/>}</ListItemIcon>
                    <ListItemText 
                    classes={{
                      primary: classes.listItemText
                    }} primary={'Help'} />
                  </ListItem>

                  <ListItem button classes={{root: classes.listItem}}>
                    <ListItemIcon>{<FeedbackIcon/>}</ListItemIcon>
                    <ListItemText 
                    classes={{
                      primary: classes.listItemText
                    }} primary={'Send Feedback'} />
                  </ListItem>
                  <Divider classes={{root: classes.divider}}/>

            </div>
          </div>
          </Hidden>
    )
}

export default Drawer;


