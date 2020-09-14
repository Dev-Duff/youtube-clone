import React from 'react';
import { 
  makeStyles,
  Typography, 
  Toolbar

} from '@material-ui/core';

const useStyles = makeStyles({
    videoListContainer: {
        padding: 4
    },
    text: {
        fontWeight: '600',
        font: '20px Roboto, Arial, sans-serif',
        color: '#333333'
    }
  });

function VideoList() {
    const classes = useStyles();

    return(
        <div  className={classes.videoListContainer}>
            <Toolbar />
            <Typography className={classes.text} >
                Trending
            </Typography>
        </div>
    )
}

export default VideoList;


