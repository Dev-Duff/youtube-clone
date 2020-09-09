import React from 'react';
import { makeStyles } from '@material-ui/core';

import TopBar from '../../components/TopBar';
import Drawer from '../../components/Drawer';

const useStyles = makeStyles({
    root: {
      height: '100vh',
    },
  });

function Home() {
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <TopBar />
            <Drawer />
        </div>
    )
}

export default Home;