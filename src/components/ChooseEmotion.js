import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import DisplayTracks from './DisplayTracks.js';
import TrackPage from '../pages/TrackPage.js';

class ChooseEmotion extends React.Component {

  //const [page, setPage] = useState("");

  render() {
    return (
      <div>
  
          <div class = "spacer"></div>
  
          <div class="heading">
              <h1>How are you feeling today?</h1>
          </div>
  
          <div class="grid-container">
  
              <section class="emotion1" onClick={(e) => this.props.handleChange(e, "Happy")}>
                Happy
              </section>
  
              {/*{page === "TRACK_PAGE" ? <TrackPage/> : null}*/}
  
              <section class="emotion2" onClick={(e) => this.props.handleChange(e, "Sad")}>Sad</section>
  
              <section class="emotion3" onClick={(e) => this.props.handleChange(e, "Hype")}>Hype</section>
  
              <section class="emotion4" onClick={(e) => this.props.handleChange(e, "Chill")}>Chill</section>
  
              <section class="emotion5" onClick={(e) => this.props.handleChange(e, "Angry")}>Angry</section>
  
              <section class="emotion6" onClick={(e) => this.props.handleChange(e, "Nostalgic")}>Nostalgic</section>
  
          </div>
      </div>
      
    );
  }
  
}

export default ChooseEmotion;