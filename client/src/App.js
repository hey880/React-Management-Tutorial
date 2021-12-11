import React from 'react';
import './App.css';
import Customer from './components/Customer';
import { Paper, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import { withStyles } from '@mui/styles';

const styles = theme => ({
  root: {
    width: '100%',
    //marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 1080,
  }
})

function App(props) {
  const customers = [
    {
      id: 1,
      image: 'https://placeimg.com/64/64/1',
      name: '나동빈',
      birthday: '961203',
      gender: '남자',
      job: '대학생',
    },
    {
      id: 2,
      image: 'https://placeimg.com/64/64/2',
      name: '홍길동',
      birthday: '961222',
      gender: '남자',
      job: '프로그래머',
    },
    {
      id: 3,
      image: 'https://placeimg.com/64/64/3',
      name: '개똥이',
      birthday: '931222',
      gender: '남자',
      job: '디자이너',
    },
  ]

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
            customers.map((data, index) => {
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
            })
          }

        </TableBody>
      </Table>
    </Paper>
  );
}

export default withStyles(styles)(App);