import React from 'react';
import ButtonAppBar from '../components/AppBar.js';
import DisplayTracks from '../components/DisplayTracks.js';
import './Pages.css';

class TrackPage extends React.Component {

  render() {
    return (
      <div>
        <ButtonAppBar handleHome={this.props.handleHome}/>
  
        <DisplayTracks emotion={this.props.emotion}/>
  
      </div>
    );
  }
  
}

export default TrackPage