import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import HomeIcon from '@material-ui/icons/Home';

class ButtonAppBar extends React.Component {

  render() {
    return (
      <div style={{
        flexGrow: 1,
      }}>
        <AppBar>
          <Toolbar>
            <MusicNoteIcon />
            <Typography variant="h6" style={{flexGrow: 1,}}>
              Spotify Mood Maker
            </Typography>
            <IconButton edge="start" style={{marginRight: "10px",}} color="inherit" aria-label="menu">
              <HomeIcon onClick={this.props.handleHome}/>
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
  
}

export default ButtonAppBar;