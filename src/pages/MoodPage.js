import React from 'react';
import ButtonAppBar from '../components/AppBar.js';
import ChooseEmotion from '../components/ChooseEmotion.js';
import './Pages.css';

export default function MoodPage() {

  return (
    <div>
      <ButtonAppBar/>

      <ChooseEmotion/>

    </div>
  );
}