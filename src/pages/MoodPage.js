import React, { useState, useEffect } from 'react';
import ButtonAppBar from '../components/AppBar.js';
import axios from 'axios';
import { Credentials } from '../components/Credentials';
import ChooseEmotion from '../components/ChooseEmotion.js';

export default function MoodPage() {

  const spotify = Credentials();  

  useEffect(() => {
    axios('https://accounts.spotify.com/api/token', {
      headers : {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Authorization' : 'Basic ' + btoa(spotify.ClientId + ':' + spotify.ClientSecret)
      },
      data: 'grant_type=client_credentials',
      method: 'POST'
    })
    .then(tokenResponse => {
      let token = tokenResponse.data.access_token;
      console.log("ACCESS TOKEN:", token);
    });
  },[]);

  return (
    <div>
      <ButtonAppBar/>

      <ChooseEmotion/>

    </div>
  );
}