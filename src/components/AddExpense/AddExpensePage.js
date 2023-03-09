import React from 'react';
import {startAddExpense} from '../actions/expenses'
import { connect } from 'react-redux';
import ExpenseForm from '../ExpenseForm';
import { useNavigate } from 'react-router-dom';


const AddExpensePage = (props) => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Add Expense</h1>

                <ExpenseForm
                    onSubmit={(expense)=>{
                       console.log(expense, props.history)
                        props.dispatch(startAddExpense(expense))
                       navigate('/')
                    }
                }
                />
           
        </div>
    );
};
const mapDispatchToProps = (dispatch) => ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
  });
export default connect(mapDispatchToProps)(AddExpensePage);
