import './ExpenseDate.css';
function ExpenseDate(props) {
  const month = props.date.toLocaleDateString('en-GB', { month: 'short' });
  const day = props.date.toLocaleDateString('en-GB', { day: 'numeric' });
  const year = props.date.getFullYear();
  return (
    <div className='expense-item'>
      <div className='expense-date'>
        <div className='expense-date__day'>{day}</div>
        <div className='expense-date__month'>{month}</div>
        <div className='expense-date__year'>{year}</div>
      </div>
    </div>
  );
}

export default ExpenseDate;
