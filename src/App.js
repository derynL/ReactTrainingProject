import Expenses from './components/Expenses';

export default function App() {
  const expenses = [
    { id: 'e1', title: 'Groceries', amount: 156.34, date: new Date() },
    { id: 'e2', title: 'Petrol', amount: 68.12, date: new Date() },
    { id: 'e3', title: 'Energy Bill', amount: 359.43, date: new Date() },
    { id: 'e4', title: 'Car Insurance', amount: 32.0, date: new Date() },
    { id: 'e5', title: 'Internet/ TV', amount: 86.0, date: new Date() },
  ];

  return (
    <div>
      <h1>Expenses</h1>
      <Expenses expenses={expenses} />
    </div>
  );
}
