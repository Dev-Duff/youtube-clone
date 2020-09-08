import React from 'react';
import { makeStyles } from '@material-ui/core';

import TopBar from '../../components/TopBar';

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
        </div>
    )
}

export default Home;