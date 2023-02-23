import React from 'react';
import ExpensesList from '../ExpensesList';
import ExpenseListFilters from '../ExpenseListFilters';

const ExpensesDashboardPage = () => {
    return (
        <div>
          <ExpenseListFilters/>
          <ExpensesList/>
        </div>
    );
};

export default ExpensesDashboardPage;