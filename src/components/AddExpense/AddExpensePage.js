import React from 'react';
import {addExpense} from '../actions/expenses'
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
                        props.dispatch(addExpense(expense))
                       navigate('/')
                    }
                }
                />
           
        </div>
    );
};
export default connect()(AddExpensePage);
