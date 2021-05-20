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

// let track  = [];
// let artist = [];
// let album = [];

let spotifyData = [];

let rows  =  [];

const recsURL  = 'https://api.spotify.com/v1/recommendations?limit=10&seed_genres=rock';
let token;

// const getRecs = (url, token) => {
//   fetch(url, {
//     method: 'GET', headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer ' + token
//     }
//   })
//   .then((response) => {
//       response.json().then(
//       (data) => { 
//       console.log("RES:", data);
//       const items = data.tracks;
//       items.forEach(i => {
//         track.push(i.name);
//         artist.push(i.artists[0].name);
//         album.push(i.album.name);
//       });
//        }
//      );
//   })
// };


const useStyles = makeStyles({
  table: {
    minWidth: 300,
  },
});

// function createData(track, artist, album) {
//   console.log(track, artist, album);
//   return { track, artist, album };
// }

export default function DisplayTracks() {

  const [trackData, setTrackData] = useState([]);
  // const [tracks, setTracks] = useState([]);
  // const [artists, setArtists] = useState([]);
  // const [albums, setAlbums] = useState([]);

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
      //getRecs(recsURL, token);
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
          // track.push(i.name);
          // artist.push(i.artists[0].name);
          // album.push(i.album.name);

          spotifyData.push([i.name, i.artists[0].name, i.album.name]);
        });
         })
         .then(() => {
          // setTracks(track);
          // setArtists(artist);
          // setAlbums(album);
          // console.log("STATE:", tracks, albums, artists);

          setTrackData(spotifyData);
          console.log(spotifyData);
          console.log("STATE:", trackData);
        })
        // .then(() => {
        //   rows = [
        //     createData(track[0], artist[0], album[0]),
        //     createData(track[1], artist[1], album[1]),
        //     createData(track[2], artist[2], album[2]),
        //     createData(track[3], artist[3], album[3]),
        //     createData(track[4], artist[4], album[4]),
        //     createData(track[5], artist[5], album[5]),
        //     createData(track[6], artist[6], album[6]),
        //     createData(track[7], artist[7], album[7]),
        //     createData(track[8], artist[8], album[8]),
        //     createData(track[9], artist[9], album[9])
        //   ];
        //   console.log(rows)
        // })
      })
    })
  },[]);

  return (
    <div> 
        <div class = "spacer"></div>

        <div class="heading">
            <h1>(Emotion) Songs</h1>
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
            <TableRow key={row}>
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