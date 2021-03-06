import React from 'react';
import { 
  makeStyles,
  Typography, 
  Toolbar,
  Grid,
  Box,
} from '@material-ui/core';

import { useTheme } from '@material-ui/core/styles';

const videos = [
    {
      id: 1,
      title:
        'FEED DO USUÁRIO | Criando uma Rede Social com React.js e .NET Core #29',
      channel: 'Vitor Rocha',
      views: '11 mi de visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb1.png',
    },
    {
      id: 2,
      title:
        'COMO MELHORAR SEU CODIGO JAVASCRIPT (ESLINT + PRETTIER + EDITORCONFIG) | Dicas e Truques #02',
      channel: 'Vitor Rocha',
      views: '957 mil visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb2.png',
    },
    {
      id: 3,
      title:
        'CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27',
      channel: 'Vitor Rocha',
      views: '106 mil visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb3.png',
    },
    {
      id: 4,
      title:
        'CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27',
      channel: 'Vitor Rocha',
      views: '5,6 mi de visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb4.png',
    },
    {
      id: 5,
      title:
        'EDITOR DE POST COM MARKDOWN 2 | Criando uma Rede Social com React.js e .NET Core #26',
      channel: 'Vitor Rocha',
      views: '2,2 mi de visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb5.png',
    },
    {
      id: 6,
      title: 'COMO MIGRAR PARA REACT HOOKS | Dicas e Truques #01',
      channel: 'Vitor Rocha',
      views: '233 mil visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb6.png',
    },
    {
      id: 7,
      title:
        'PRÉ-REQUISITOS | Criando uma Rede Social com React.js e .NET Core #01',
      channel: 'Vitor Rocha',
      views: '118 mil visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb7.png',
    },
    {
      id: 8,
      title:
        'GIT E GITHUB | Criando uma Rede Social com React.js e .NET Core #04',
      channel: 'Vitor Rocha',
      views: '1,9 mi de visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb8.png',
    },
  ];

const useStyles = makeStyles({
    videoListContainer: {
        padding: '1.4rem',
        width: '100%',
        height: '100%',
        cursor: 'pointer'
    },
    text: {
        fontWeight: '600',
        font: '20px Roboto, Arial, sans-serif',
        color: '#333333',
        marginBottom: '15px'
    },
    primary: {
        main: '#f44336',
      },
    secondary: {
        main: '#3EA6FF',
    },
    videoBox: {
      cursor: 'pointer'
    }
  });

function VideoList() {
    const theme = useTheme();

    const classes = useStyles();
    
    return(
        <div style={{ backgroundColor: theme.palette.background.dark}} className={classes.videoListContainer} p={8}>
            <Toolbar />
            <Typography className={classes.text} style={{ color: theme.palette.background.text}}>
                Trending
            </Typography>
            <Grid container  spacing={4}>
                {videos.map((item, index) => (
                <Grid item lg={3} md={4} sm={6} xs={12} key={index}>
                    <Box className={classes.video}> 
                        <img 
                            style={{width: '100%'}}
                            alt={item.title}
                            src={item.thumb}
                        />
                        <Box>
                            <Typography 
                                style={{fontWeight: 600}}
                                gutterBottom
                                variant='body1'
                                color='textPrimary'
                            >
                                {item.title}
                            </Typography>
                            <Typography
                                display='block'
                                variant='body2' 
                                color='textSecondary'                           
                            >
                                {item.channel}
                            </Typography>
                            <Typography
                                variant='body2'
                                color='textSecondary'
                            >
                                {`${item.views} • ${item.date}`}
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                ))}
            </Grid>
        </div> //VideoList
    )
}

export default VideoList;


