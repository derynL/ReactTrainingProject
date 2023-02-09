import { useState } from 'react';
import './ExpenseForm.css';
const ExpenseForm = (props) => {
  // const [userInput, setUserInput] = useState({
  //   newTitle: '',
  //   newExpense: '',
  //   newDate: '',
  // });
  const [newTitle, setNewTitle] = useState('');
  const [newExpense, setNewExpense] = useState('');
  const [newDate, setNewDate] = useState('');
  const titleChangeHandler = (event) => {
    setNewTitle(event.target.value);
    // setUserInput((previousState) => {
    //   return { ...previousState, newTitle: event.target.value };
    // });
  };
  const expenseChangeHandler = (event) => {
    setNewExpense(event.target.value);
    // setUserInput((previousState) => {
    //   return { ...previousState, newExpense: event.target.value };
    // });
  };
  const dateChangeHandler = (event) => {
    setNewDate(event.target.value);
    // setUserInput((previousState) => {
    //   return { ...previousState, newDate: event.target.value };
    // });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: newTitle,
      amount: newExpense,
      date: new Date(newDate),
    };
    console.log(expenseData);

    props.onSaveExpenseData();
    setNewTitle('');
    setNewExpense('');
    setNewDate('');
  };
  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={newTitle} onChange={titleChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={newExpense}
            onChange={expenseChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='06/04/2019'
            max='05/04/2023'
            value={newDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className='new-expense__actions'>
          <button type='submit'>Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
