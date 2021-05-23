import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import DisplayTracks from './DisplayTracks.js';
import TrackPage from '../pages/TrackPage.js';

export default function ChooseEmotion() {

  const [page, setPage] = useState("");

  return (
    <div>

        <div class = "spacer"></div>

        <div class="heading">
            <h1>How are you feeling today?</h1>
        </div>

        <div class="grid-container">

            <section class="emotion1" >{/*onClick={() => setPage("TRACK_PAGE")}>*/}
              Happy
            </section>

            {/*{page === "TRACK_PAGE" ? <TrackPage/> : null}*/}

            <section class="emotion2">Sad</section>

            <section class="emotion3">Hype</section>

            <section class="emotion4">Chill</section>

            <section class="emotion5">Angry</section>

            <section class="emotion6">Nostalgic</section>

        </div>
    </div>
    
  );
}