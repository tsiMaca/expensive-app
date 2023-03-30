import React, {useState} from 'react';
import {startAddExpense} from '../actions/expenses'
import { useDispatch } from 'react-redux';
import ExpenseForm from '../ExpenseForm';
import { useNavigate } from 'react-router-dom';


const AddExpensePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (expense) => {
    if (!isSubmitting) {
      setIsSubmitting(true);

      try {
        await dispatch(startAddExpense(expense));
        navigate('/dashboard');
      } catch (error) {
        console.log('Error:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

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
        <ExpenseForm onSubmit={onSubmit} isSubmitting={isSubmitting} />
      </div>
    </div>
  );
};

export default AddExpensePage;

