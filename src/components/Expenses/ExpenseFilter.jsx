import './ExpenseFilter.css';

const ExpenseFilter = (props) => {
  // const [expenseFilter, setExpenseFilter] = useState(props.expenses);
  const filterSelectionHandler = (event) => {
    props.onFilterChange(event.target.value);
  };
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={filterSelectionHandler}>
          <option value='22-23'>6 Apr 22 - 5 Apr 23</option>
          <option value='21-22'>6 Apr 21 - 5 Apr 22</option>
          <option value='20-21'>6 Apr 20 - 5 Apr 21</option>
          <option value='19-20'>6 Apr 19 - 5 Apr 20</option>
          <option value='all'>Remove filter</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
