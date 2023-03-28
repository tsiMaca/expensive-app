import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ExpenseForm from '../ExpenseForm';
import { startRemoveExpense,startEditExpense } from '../actions/expenses';
import { useParams, useNavigate } from 'react-router-dom';

const EditExpensePage = () => { 
  
  const dispatch = useDispatch();
  const navigate =  useNavigate();
  const { id } = useParams();

  const expense = useSelector((state)=>state.expenses.find(expense=>expense.id===id))
  
  const onSubmit = (expense) => {
    dispatch(startEditExpense(id, expense));
    navigate('/dashboard');
  }
  const onRemove = () => {
    console.log("remove", id)
    dispatch(startRemoveExpense({ id }));
   navigate('/dashboard');
  }

  return (
    
    <div>
      <div className='page-header'>
                <div className='content-container'>
                        <h1 className='page-container__title'>Edit Expense</h1>
                </div>
            </div>
      <div className='content-container'>
        <ExpenseForm  expense={expense} onSubmit={onSubmit} />
        <button className='button button__secondary' onClick={onRemove}>Remove Expense</button>
      </div>
    </div>
    );
  };
  
    export default  (EditExpensePage);
    