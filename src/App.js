import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

export default function App() {
  const expenses = [
    { id: 'e1', title: 'Groceries', amount: 156.34, date: new Date() },
    { id: 'e2', title: 'Petrol', amount: 68.12, date: new Date() },
    { id: 'e3', title: 'Energy Bill', amount: 359.43, date: new Date() },
    { id: 'e4', title: 'Car Insurance', amount: 32.0, date: new Date() },
    { id: 'e5', title: 'Internet/ TV', amount: 86.0, date: new Date() },
  ];

  const addExpenseHandler = (expense) => {
    console.log('In App.js');
    console.log(expenses);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}
