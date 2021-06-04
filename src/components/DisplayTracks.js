import React, { useState, useEffect, onClick } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import ReactPlayer from 'react-player';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import StopIcon from '@material-ui/icons/Stop';
import { Credentials } from '../components/Credentials';
import {  createMuiTheme, ThemeProvider }  from '@material-ui/core/styles';

const themeTwo = createMuiTheme({
  palette: {
    primary: {
      main: '#1DB954',
      contrastText: '#FFFFFF',
    },
  },
});

let spotifyData = [];

//let recs  = 'https://api.spotify.com/v1/recommendations?limit=10&seed_genres=rock';
let token;

const useStyles = makeStyles({
  table: {
    minWidth: 300,
  },
});



export default function DisplayTracks(props) {


  const [trackData, setTrackData] = useState([]);
  let [recsURL, setRecsURL] = useState([]);
  let [url, setURL] = useState([]);

  if (props.emotion == 'Happy') {
    recsURL = 'https://api.spotify.com/v1/recommendations?limit=10&seed_genres=happy';
  }
  else if (props.emotion == 'Sad') {
    recsURL = 'https://api.spotify.com/v1/recommendations?limit=10&seed_genres=sad';
  }
  else if (props.emotion == 'Hype') {
    recsURL = 'https://api.spotify.com/v1/recommendations?limit=10&seed_genres=party';
  }
  else if (props.emotion == 'Chill') {
    recsURL = 'https://api.spotify.com/v1/recommendations?limit=10&seed_genres=chill';
  }
  else if (props.emotion == 'Angry') {
    recsURL = 'https://api.spotify.com/v1/recommendations?limit=10&seed_genres=heavy-metal';
  }
  else if (props.emotion == 'Kids') {
    recsURL = 'https://api.spotify.com/v1/recommendations?limit=10&seed_genres=disney';
  }
  
  function playSong (e, url) {
    //console.log(e)
    //console.log(url)
  
    setURL(url)
  }
  function stopSong(e) {
    setURL("")
  }

  function openSpotify(e, url) {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }



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
      //console.log("ACCESS TOKEN:", token);

      setRecsURL(recsURL)
      
      
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
        //console.log("RES:", data);
        const items = data.tracks;
        spotifyData = []
        items.forEach(i => {

          spotifyData.push([i.name, i.artists[0].name, i.album.name, i.external_urls.spotify, i.preview_url]);
        });
         })
         .then(() => {
          setTrackData(spotifyData);
          //console.log(spotifyData);
          //console.log("STATE:", trackData);
        })
      })
    })
  },[]);

  //console.log("url", url)

  //if (url == []) {
    return (
      <div> 
          <div class = "spacer"></div>
  
          <div class="heading">
              <h1>{props.emotion} Songs</h1>
          </div>
  
        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow style={{backgroundColor:'#999999',}}>
              <TableCell color="#FFFFFF"><b>Song</b></TableCell>
              <TableCell align="right"><b>Artist</b></TableCell>
              <TableCell align="right"><b>Album</b></TableCell>
              <TableCell align="right"><b>Play Preview</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {trackData.map((row) => (
              <TableRow key={row[0]} >
                <TableCell component="th" scope="row" onClick={(e) => openSpotify(e, row[3])}>
                  {row[0]}
                </TableCell>
                <TableCell align="right" onClick={(e) => openSpotify(e, row[3])}>{row[1]}</TableCell>
                <TableCell align="right" onClick={(e) => openSpotify(e, row[3])}>{row[2]}</TableCell>
                <TableCell align="right">
                  {row[4] ? 
                  <div>
                    <PlayArrowIcon onClick={(e) => playSong(e, row[4])}></PlayArrowIcon>
                    <StopIcon onClick={(e) => stopSong(e)}></StopIcon>
                  </div> : 
                  <div></div>}
                  
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
          
      {
        url.length == 0 ? <div></div> : <ReactPlayer url={url} playing={url ? true : false}/>
      }
      </div>
    )

  //}
  //else {
    
  //}
  
}