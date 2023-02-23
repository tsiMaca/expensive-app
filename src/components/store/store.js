import {createStore, combineReducers} from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import { composeWithDevTools } from 'redux-devtools-extension';

//Store creation
// eslint-disable-next-line import/no-anonymous-default-export

const store = createStore(combineReducers({
    expenses:expensesReducer,
    filters:filtersReducer
}),composeWithDevTools());
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
      const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
      const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
      const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
  
      return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === 'amount') {
        return a.amount < b.amount ? 1 : -1;
      }
    });
  };
  

store.subscribe(()=>{
    const state= store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log("store visible", visibleExpenses)
    }
    
    );

export default store;