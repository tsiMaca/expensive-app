import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { startRemoveExpense } from '../components/actions/expenses';
import { useNavigate } from 'react-router-dom';

const ExpenseListItem = ({dispatch, id, description, amount, createdAt}) => {
    const onRemove = () => {
        dispatch(startRemoveExpense({ id }));
       navigate('/');
      };
      const navigate = useNavigate;
    
    return (
        <div>
            <Link to={`edit/${id}`}>
            <h3>{description}</h3>
            </Link>
            <p>{amount} - {createdAt} </p>
            <button onClick={onRemove}>;
                 Remove </button>
        </div>

    );
};


export default connect() (ExpenseListItem);

