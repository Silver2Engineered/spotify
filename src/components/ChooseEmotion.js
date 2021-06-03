import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import DisplayTracks from './DisplayTracks.js';
import TrackPage from '../pages/TrackPage.js';
import happyFace from './images/happy.png'
import sadFace from './images/sad.png'
import hypeFace from './images/hype.png'
import chillFace from './images/chill.png'
import angryFace from './images/angry.png'
import kidFace from './images/kid.png'

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
                <div class="image-wrapper">
                  <img src={happyFace} class="emotion-image" ></img>
                  <div class="image-overlay">
                    <div class="emotion-title">
                      <p class="emotion-name">Happy</p>
                    </div>
                  </div>
                </div>
              </section>
  
              {/*{page === "TRACK_PAGE" ? <TrackPage/> : null}*/}
  
              <section class="emotion2" onClick={(e) => this.props.handleChange(e, "Sad")}>
              <div class="image-wrapper">
                  <img src={sadFace} class="emotion-image" ></img>
                  <div class="image-overlay">
                    <div class="emotion-title">
                      <p class="emotion-name">Sad</p>
                    </div>
                  </div>
                </div>
              </section>
  
              <section class="emotion3" onClick={(e) => this.props.handleChange(e, "Hype")}>
              <div class="image-wrapper">
                  <img src={hypeFace} class="emotion-image" ></img>
                  <div class="image-overlay">
                    <div class="emotion-title">
                      <p class="emotion-name">Hype</p>
                    </div>
                  </div>
                </div>
              </section>
  
              <section class="emotion4" onClick={(e) => this.props.handleChange(e, "Chill")}>
              <div class="image-wrapper">
                  <img src={chillFace} class="emotion-image" ></img>
                  <div class="image-overlay">
                    <div class="emotion-title">
                      <p class="emotion-name">Chill</p>
                    </div>
                  </div>
                </div>
              </section>
  
              <section class="emotion5" onClick={(e) => this.props.handleChange(e, "Angry")}>
              <div class="image-wrapper">
                  <img src={angryFace} class="emotion-image" ></img>
                  <div class="image-overlay">
                    <div class="emotion-title">
                      <p class="emotion-name">Angry</p>
                    </div>
                  </div>
                </div>
              </section>
  
              <section class="emotion6" onClick={(e) => this.props.handleChange(e, "Kids")}>
              <div class="image-wrapper">
                  <img src={kidFace} class="emotion-image" ></img>
                  <div class="image-overlay">
                    <div class="emotion-title">
                      <p class="emotion-name">Kids</p>
                    </div>
                  </div>
                </div>
              </section>
  
          </div>
      </div>
      
    );
  }
  
}

export default ChooseEmotion;