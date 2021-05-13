import React, { useState, useEffect } from 'react';
import ButtonAppBar from '../components/AppBar.js';
import axios from 'axios';
import { Credentials } from '../components/Credentials';
import Dropdown from '../components/Dropdown';

export default function MoodPage() {

  const spotify = Credentials();  

  const [token, setToken] = useState('');
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    axios('https://accounts.spotify.com/api/token', {
      headers : {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Authorization' : 'Basic ' + btoa(spotify.CliendId + ':' + spotify.ClientSecret)
      },
      data: 'grant_type=client_credentials',
      method: 'POST'
    })
    .then(tokenResponse => {
      console.log(tokenResponse.json());
      console.log(tokenResponse.data.access_token);
      setToken(tokenResponse.data.access_token);

      axios('http://api.spotify.com/v1/browse/categories?local-sv_US', {
        method: 'GET',
        headers: {'Authorization' : 'Bearer ' + tokenResponse.data.access_token}
      })
      .then(genreResponse => {
        setGenres(genreResponse.data.categories.items);
        console.log(genres);
      });

    });

  },[]);

  return (
    <div>
      <ButtonAppBar/>
      {/* <Dropdown label="Genre :" options={genres} selectedValue={genres.selectedGenre} /> */}
      <h1>
        I have no idea what I'm doing :)
      </h1>
    </div>
  );
}