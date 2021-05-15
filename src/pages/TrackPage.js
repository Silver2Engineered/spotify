import React from 'react';
import ButtonAppBar from '../components/AppBar.js';
import DisplayTracks from '../components/DisplayTracks.js';
import './Pages.css';

export default function TrackPage() {

  return (
    <div>
      <ButtonAppBar/>

      <DisplayTracks/>

    </div>
  );
}