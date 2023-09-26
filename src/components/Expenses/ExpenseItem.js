import React,{useState} from 'react';

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';


const ExpenseItem = (props) => {
 const [title,setTitle]=useState(props.title);
  
  const clickHandler =()=>{
    setTitle('Changed!')
    console.log(title);
  };
  return (
    <li>
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>CHANGE TITLE</button>
    </Card>
    </li>
  );
}

export default ExpenseItem;
