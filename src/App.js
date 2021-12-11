import React from 'react';
import './App.css';
import Customer from './components/Customer';

function App() {
  const customers = [
  {
    id: 1,
    image : 'https://placeimg.com/64/64/1',
    name : '나동빈',
    birthday : '961203',
    gender : '남자',
    job : '대학생',
  },
  {
    id: 2,
    image : 'https://placeimg.com/64/64/2',
    name : '홍길동',
    birthday : '961222',
    gender : '남자',
    job : '프로그래머',
  },
  {
    id: 3,
    image : 'https://placeimg.com/64/64/3',
    name : '개똥이',
    birthday : '931222',
    gender : '남자',
    job : '디자이너',
  },
]
  return (
    customers.map((data, index)=>{
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
  );
}

export default App;
