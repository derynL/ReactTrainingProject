import Expenses from './components/Expenses';

export default function App() {
  const expenses = [
    { title: 'Groceries', amount: 156.34, date: new Date() },
    { title: 'Petrol', amount: 68.12, date: new Date() },
    { title: 'Energy Bill', amount: 359.43, date: new Date() },
    { title: 'Car Insurance', amount: 32.0, date: new Date() },
    { title: 'Internet/ TV', amount: 86.0, date: new Date() },
  ];

  return (
    <div>
      <Expenses expenses={expenses} />
    </div>
  );
}
