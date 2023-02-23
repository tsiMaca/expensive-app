import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ExpenseForm from '../ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';
import { useParams, useNavigate } from 'react-router-dom';

const EditExpensePage = () => { 
  const dispatch = useDispatch();
  const navigate =  useNavigate();
  const { id } = useParams();


  const expense = useSelector((state)=>state.expenses.find(expense=>expense.id===id))
  
  const onSubmit = (expense) => {
    dispatch(editExpense(id, expense));
    navigate('/');
  }
  const onRemove = () => {
    dispatch(removeExpense({ id }));
   navigate('/');
  }

  return (
    <div>
      <ExpenseForm  expense={expense} onSubmit={onSubmit} />
      <button onClick={onRemove}>Remove</button>
    </div>
    );
  };
  
    export default  (EditExpensePage);
    