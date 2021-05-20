import React, { useState, useEffect } from 'react';
import ButtonAppBar from '../components/AppBar.js';
import axios from 'axios';
import { Credentials } from '../components/Credentials';
import ChooseEmotion from '../components/ChooseEmotion.js';

let genres  = [];

const getMe = (url, token) => {
  fetch(url, {
    method: 'GET', headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    }
  })
  .then((response) => {
      response.json().then(
      (data) => { 
      console.log(data);
      const next = data.categories.next;
      const items =  data.categories.items;
      items.forEach(g => {
          console.log(g);
          genres.push(g.name);
      });
      console.log("GENRES: ", genres);
      if (next) {
        getMe(next, token);
      }
      }
    );
  });
};

const getRecs = (url, token) => {
  fetch(url, {
    method: 'GET', headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    }
  })
  .then((response) => {
      response.json().then(
      (data) => { 
      console.log(data);
      //const next = data.categories.next;
      //const items =  data.categories.items;
      //items.forEach(g => {
          //console.log(g);
          //genres.push(g.name);
      //});
      //console.log("GENRES: ", genres);
      //if (next) {
        //getMe(next, token);
      //}
       }
     );
  });
};

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

      const genreURL = 'https://api.spotify.com/v1/browse/categories';
      const recsURL  = 'https://api.spotify.com/v1/recommendations?limit=10&seed_genres=rock';
      getRecs(recsURL, token);
      console.log(genres);
    });
  },[]);

  return (
    <div>
      <ButtonAppBar/>

      <ChooseEmotion/>

    </div>
  );
}