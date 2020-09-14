import React from 'react';
import { makeStyles } from '@material-ui/core';

import TopBar from '../../components/TopBar';
import Drawer from '../../components/Drawer';
import VideoList from '../../components/VideoList';

const useStyles = makeStyles({
    root: {
      height: '100vh',
      display:'flex'
    },
  });

function Home() {
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <TopBar />
            <Drawer />
            <VideoList />
        </div>
    )
}

export default Home;