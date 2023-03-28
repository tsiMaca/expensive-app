import React from 'react';
import {startAddExpense} from '../actions/expenses'
import { connect, useDispatch } from 'react-redux';
import ExpenseForm from '../ExpenseForm';
import { useNavigate } from 'react-router-dom';


const AddExpensePage = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return (
        <div>
            <div className='page-header'>
                <div className='content-container'>
                    <div className='page-container__title'>
                        <h1>Add Expense</h1>
                    </div>
                </div>
            </div>
            <div className='content-container'>
                <ExpenseForm
                    onSubmit={(expense)=>{
                       console.log('op1', expense)
                       dispatch(startAddExpense(expense))
                       navigate('/dashboard')
                    }
                }
                />
            </div>
           
        </div>
    );
};

export default AddExpensePage;
