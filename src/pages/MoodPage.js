import React, { useState, useEffect } from 'react';
import ButtonAppBar from '../components/AppBar.js';
import axios from 'axios';
import { Credentials } from '../components/Credentials';
import Dropdown from '../components/Dropdown';
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
    //console.log(
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

export default function MoodPage() {

  const spotify = Credentials();  

  //const [token, setToken] = useState('');
  //const [genres, setGenres] = useState([]);

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
      //console.log(tokenResponse);
      console.log("ACCESS TOKEN:", tokenResponse.data.access_token);

      const genreURL = 'https://api.spotify.com/v1/browse/categories';
      getMe(genreURL, tokenResponse.data.access_token);
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