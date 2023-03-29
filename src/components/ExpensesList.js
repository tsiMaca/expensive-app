import { connect } from "react-redux";
import ExpenseListItem from '../components/ExpenseListItem';
import selectExpenses from './selectors/expenses';

const ExpensesList = (props) => {
    //const expenses = useSelector(state => state.expenses);

 if (props.expenses?.length === 0) {
    return <div className="list-item list-item--message">No expenses </div>;
  }
 console.log('op2', props.expenses)
    return (
        <div className="content-container">
            <div className="list-header">
                <div className="show-for-mobile"> Expenses</div>
                <div className="show-for-desktop">Expense</div>
                <div className="show-for-desktop">Amount</div>
            </div>
            {props.expenses?.map((expense)=>{ return <ExpenseListItem key={expense.id} {...expense}/> })}
            
        </div>
    );

};

const mapStateToProps = (state) => {
    return {
      expenses: selectExpenses(state.expenses, state.filters)
    };
  };

  export default connect(mapStateToProps)(ExpensesList);
