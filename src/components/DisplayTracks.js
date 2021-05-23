import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import { Credentials } from '../components/Credentials';

let spotifyData = [];

const recsURL  = 'https://api.spotify.com/v1/recommendations?limit=10&seed_genres=rock';
let token;

const useStyles = makeStyles({
  table: {
    minWidth: 300,
  },
});

export default function DisplayTracks(props) {

  const [trackData, setTrackData] = useState([]);

  const spotify = Credentials();  
  const classes = useStyles();

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
      token = tokenResponse.data.access_token;
      console.log("ACCESS TOKEN:", token);
      fetch(recsURL, {
        method: 'GET', headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        }
      })
      .then((response) => {
        response.json().then(
        (data) => { 
        console.log("RES:", data);
        const items = data.tracks;
        items.forEach(i => {

          spotifyData.push([i.name, i.artists[0].name, i.album.name]);
        });
         })
         .then(() => {
          setTrackData(spotifyData);
          console.log(spotifyData);
          console.log("STATE:", trackData);
        })
      })
    })
  },[]);

  return (
    <div> 
        <div class = "spacer"></div>

        <div class="heading">
            <h1>{props.emotion} Songs</h1>
        </div>

        <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><b>Song</b></TableCell>
            <TableCell align="right"><b>Artist</b></TableCell>
            <TableCell align="right"><b>Album</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {trackData.map((row) => (
            <TableRow key={row[0]}>
              <TableCell component="th" scope="row">
                {row[0]}
              </TableCell>
              <TableCell align="right">{row[1]}</TableCell>
              <TableCell align="right">{row[2]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </div>
  )
}