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

let tracks  = [];
let artists = [];
let albums = [];

let rows  =  [];

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
      const items = data.tracks;
      items.forEach(i => {
        tracks.push(i.name);
        artists.push(i.artists[0].name);
        albums.push(i.album.name);
      });
      this.setState({
        tracks: tracks,
        artists: artists,
        albums: albums
      })
      console.log(tracks);
      console.log(artists);
      console.log(albums);
       }
     );
  })
  .then(() => {
    rows = [
      createData(tracks[0], artists[0], albums[0]),
      createData(tracks[1], artists[1], albums[1]),
      createData(tracks[2], artists[2], albums[2]),
      createData(tracks[3], artists[3], albums[3]),
      createData(tracks[4], artists[4], albums[4]),
      createData(tracks[5], artists[5], albums[5]),
      createData(tracks[6], artists[6], albums[6]),
      createData(tracks[7], artists[7], albums[7]),
      createData(tracks[8], artists[8], albums[8]),
      createData(tracks[9], artists[9], albums[9])
    ];
    console.log(rows)
  })
};


const useStyles = makeStyles({
  table: {
    minWidth: 300,
  },
});

function createData(track, artist, album) {
  console.log(track, artist, album);
  return { track, artist, album };
}

// const rows2 = [
//   createData('Track 1', 'Artist 1', 'Album 1'),
//   createData('Track 2', 'Artist 2', 'Album 2'),
//   createData('Track 3', 'Artist 3', 'Album 3'),
//   createData('Track 4', 'Artist 4', 'Album 4'),
//   createData('Track 5', 'Artist 5', 'Album 5'),
//   createData('Track 6', 'Artist 6', 'Album 6'),
//   createData('Track 7', 'Artist 7', 'Album 7'),
//   createData('Track 8', 'Artist 8', 'Album 8'),
//   createData('Track 9', 'Artist 9', 'Album 9'),
//   createData('Track 10', 'Artist 10', 'Album 10')
// ];

// const rows = [
//   createData(tracks[0], artists[0], albums[0]),
//   createData(tracks[1], artists[1], albums[1]),
//   createData(tracks[2], artists[2], albums[2]),
//   createData(tracks[3], artists[3], albums[3]),
//   createData(tracks[4], artists[4], albums[4]),
//   createData(tracks[5], artists[5], albums[5]),
//   createData(tracks[6], artists[6], albums[6]),
//   createData(tracks[7], artists[7], albums[7]),
//   createData(tracks[8], artists[8], albums[8]),
//   createData(tracks[9], artists[9], albums[9])
// ];

export default function DisplayTracks() {

  const spotify = Credentials();  
  const classes = useStyles();

  constructor(props) {
    super(props);

    this.state = {
        tracks: [],
        artists: [],
        albums:[]
    };

    // // init then fetch data
    // // need to run server and get this url
    // const url = 'http://localhost:8081/doctors';

    // fetch(url)
    //     .then(response  =>  response.json())
    //     .then(doctors => {
    //         this.setState({
    //             doctors: doctors
    //         });
    //         docs = doctors;
    //         console.log("docs: ", docs);
    //     });
}

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
    })
    .then(() => {

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
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.track}
                  </TableCell>
                  <TableCell align="right">{row.artist}</TableCell>
                  <TableCell align="right">{row.album}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    
        </div>
        
      );

    })
  },[]);

  return(null);

  // const classes = useStyles();

  // return (
  //   <div> 
  //       <div class = "spacer"></div>

  //       <div class="heading">
  //           <h1>(Emotion) Songs</h1>
  //       </div>

  //       <TableContainer component={Paper}>
  //     <Table className={classes.table} aria-label="simple table">
  //       <TableHead>
  //         <TableRow>
  //           <TableCell><b>Song</b></TableCell>
  //           <TableCell align="right"><b>Artist</b></TableCell>
  //           <TableCell align="right"><b>Album</b></TableCell>
  //         </TableRow>
  //       </TableHead>
  //       <TableBody>
  //         {rows.map((row) => (
  //           <TableRow key={row.name}>
  //             <TableCell component="th" scope="row">
  //               {row.track}
  //             </TableCell>
  //             <TableCell align="right">{row.artist}</TableCell>
  //             <TableCell align="right">{row.album}</TableCell>
  //           </TableRow>
  //         ))}
  //       </TableBody>
  //     </Table>
  //   </TableContainer>

  //   </div>
    
  // );
}