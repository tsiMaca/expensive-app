import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
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
            {/* <button onClick ={()=>dispatch(addExpense({description:'water bill', amount:100, createdAt: 1250 }))}> Add new water bill </button>
            <button onClick ={()=>dispatch(addExpense({description:'gas bill', amount:200, createdAt: 700 }))}> Add new gas bill </button>
            <button onClick ={()=>dispatch(setTextFilter('water'))}> filter bill </button>
            <button onClick ={()=>dispatch(setStartDate(1250))}> filter start date </button>
            <button onClick ={()=>dispatch(sortByAmount())}> sort by amount </button>
             */}
           
        </div>
    );
};
export default connect()(AddExpensePage);
