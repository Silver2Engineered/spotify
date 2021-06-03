import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import HomeIcon from '@material-ui/icons/Home';
import {  createMuiTheme }  from '@material-ui/core/styles';

const themeOne = createMuiTheme({
  palette: {
    primary: {
      main: '#1DB954',
      contrastText: '#FFFFFF',
    },
  },
});

class ButtonAppBar extends React.Component {

  render() {
    return (
      <div style={{
        flexGrow: 1,
      }}>
        <ThemeProvider theme={themeOne}>
        <AppBar>
          <Toolbar>
            <MusicNoteIcon />
            <Typography variant="h6" style={{flexGrow: 1,}}>
              Spotify Mood Player
            </Typography>
            <IconButton edge="start" style={{marginRight: "10px",}} color="inherit" aria-label="menu">
              <HomeIcon onClick={this.props.handleHome}/>
            </IconButton>
          </Toolbar>
        </AppBar>
        </ThemeProvider>
        
      </div>
    );
  }
  
}

export default ButtonAppBar;