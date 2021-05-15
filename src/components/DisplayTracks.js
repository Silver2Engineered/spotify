import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Track 1', 'Artist 1', 'Album 1'),
  createData('Track 2', 'Artist 2', 'Album 2'),
  createData('Track 3', 'Artist 3', 'Album 3'),
  createData('Track 4', 'Artist 4', 'Album 4'),
  createData('Track 5', 'Artist 5', 'Album 5'),
  createData('Track 6', 'Artist 6', 'Album 6'),
  createData('Track 7', 'Artist 7', 'Album 7'),
  createData('Track 8', 'Artist 8', 'Album 8'),
  createData('Track 9', 'Artist 9', 'Album 9'),
  createData('Track 10', 'Artist 10', 'Album 10')
];

export default function DisplayTracks() {
    const classes = useStyles();

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
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </div>
    
  );
}