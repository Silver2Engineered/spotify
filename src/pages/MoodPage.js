import React from 'react';
import ButtonAppBar from '../components/AppBar.js';
import './MoodPage.css';

export default function MoodPage() {

  return (
    <div>
      <ButtonAppBar/>

      <div class = "spacer"></div>

      <div class="heading">
        <h1>How are you feeling today?</h1>
      </div>

      <div class="grid-container">

        <section class="emotion1"></section>

        <section class="emotion2"></section>

        <section class="emotion3"></section>

        <section class="emotion4"></section>

        <section class="emotion5"></section>

        <section class="emotion6"></section>

      </div>

      <div class = "spacer"></div>

    </div>
  );
}