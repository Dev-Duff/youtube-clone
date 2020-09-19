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
        logo: darkMode ? '/images/branco.png' : '/images/preto.png',
        icons: darkMode ? '#FFF' : '#606060'
      },
    },
  });
    
  const classes = useStyles();

  const htmlBg = document.querySelector('html').style.background = theme.palette.background.dark //change all the html bgColor
  console.log(htmlBg)
  return(
        <ThemeProvider theme={theme} style={{height: '100%'}} setDarkMode={setDarkMode}>
          <div className={classes.root} >
            <TopBar darkMode={darkMode} setDarkMode={setDarkMode}/>
            <Drawer />
            <VideoList />
          </div>
           
        </ThemeProvider>
    )
}

export default Home;