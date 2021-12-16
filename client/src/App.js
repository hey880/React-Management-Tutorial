import React, { useState, useEffect } from 'react';
import './App.css';
import Customer from './components/Customer';
import { Paper, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import { withStyles } from '@mui/styles';
import CircularProgress from '@mui/material/CircularProgress';

const styles = theme => ({
  root: {
    width: '100%',
    //marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 1080,
  },
  progress: {
    //marginTop: theme.spacing(2),
    marginTop : '50px'
  }
})

function App(props) {
  const [state, setState] = useState({ customers: "", completed: 0 });

  let callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  useEffect(() => {
    callApi()
      .then(res => setState({ customers: res }))
      .catch(err => console.log(err));
    return;
  }, [])

  const { classes } = props;
  
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            state.customers ? state.customers.map((data, index) => {
              return (
                <Customer
                  key={index}
                  id={data.id}
                  image={data.image}
                  name={data.name}
                  birthday={data.birthday}
                  gender={data.gender}
                  job={data.job}
                />
              )
            }) : <h1>데이터가 없습니다.</h1>
          }
        </TableBody>
      </Table>
    </Paper>
  );
}

export default withStyles(styles)(App);
