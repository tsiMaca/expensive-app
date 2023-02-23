import React from 'react';
import {useSelector, connect } from "react-redux";
import ExpenseListItem from '../components/ExpenseListItem';
import selectExpenses from './selectors/expenses'

const ExpensesList = (props) => {
    const expenses = useSelector((state) => state.expenses);
    return (
        <div>
            <h1>Expense List</h1>
           {props.expenses.map((expense)=>{ return <ExpenseListItem key={expense.id} {...expense}/> })}
            
        </div>
    );

};
const mapStateToProps = (state) => {
    return {
        expenses:selectExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps) (ExpensesList);