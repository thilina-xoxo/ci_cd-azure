import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {MuiThemeProvider , createMuiTheme} from '@material-ui/core'
import { teal, green, cyan, indigo } from '@material-ui/core/colors';

const theme =createMuiTheme({
  palette:{
    primary:{
      
      main:indigo[900],
    
    }
  }
})



// Generate Order Data
function createData(id, date, name, TimeAllow, DocName, Pay) {
  return { id, date, name, TimeAllow, DocName, Pay };
}

const rows = [
  createData(0, '25 Feb, 2021', 'Amila Aponsu', '11.30', '', ),
  createData(1, '26 Feb, 2021', 'Lasith Embuldeniya', '11.45', '', ),
  createData(2, '1 Mar, 2021', 'Saman Edirimuni', '22.00', '', ),
  createData(3, '2 Mar, 2021', 'Nimal Lansa', '22.30', '', ),
  createData(4, '3 Mar, 2021', 'Wimal Rodrigo', '22.15', '', ),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Appointments() {
  const classes = useStyles();
  return (

<MuiThemeProvider theme={theme}

> 
    <React.Fragment>
   <div className="title">Recent Appointments</div>
      <Table size="large">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Time Allocated</TableCell>
            <TableCell>Doctor's Name</TableCell>
            <TableCell align="right">Payement</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.TimeAllow}</TableCell>
              <TableCell>{row.DocName}</TableCell>
              <TableCell align="right">{row.Pay}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    
    </React.Fragment>
    </MuiThemeProvider>   
  );
}