import React, { useState, useEffect } from 'react';
import ButtonAppBar from '../components/AppBar.js';
import ChooseEmotion from '../components/ChooseEmotion.js';

export default function MoodPage() {

  return (
    <div>
      <ButtonAppBar/>

      <ChooseEmotion/>

    </div>
  );
}