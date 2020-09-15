import React, {useState} from 'react';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core';

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
  const [darkMode, setDarkMode] = useState(false);

  const theme = createMuiTheme({
    spacing: 4,
    palette: {
      type: darkMode ? 'dark' : 'light',
    
      background: {
        default: darkMode ? '#232323' : '#FFF',
        dark: darkMode ? '#181818' : '#f4f6f8',
        drawer: darkMode ? '#232323' : '#FFFFFF',
        text: darkMode ? '#FFF' : '#232323',
      },
    },
  });
    
    const classes = useStyles();

    return(
        <ThemeProvider theme={theme} style={{height: '100%'}} setDarkMode={setDarkMode}>
          <div className={classes.root} >
            <TopBar />
            <Drawer />
            <VideoList />
          </div>
           
        </ThemeProvider>
    )
}

export default Home;