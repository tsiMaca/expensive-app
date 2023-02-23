import expensesReducer from '../../components/reducers/expenses'
import expenses from '../fixtures/expenses';


test ('should set default state', ()=>{
    const state = expensesReducer(undefined, {type:'@@INIT'});
    expect(state).toEqual([]);
});

test ('should remove expense by id', ()=>{
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0],expenses[2]]);
});

test ('should not remove expense if if id not found', ()=>{
    const action = {
        type: 'REMOVE_EXPENSE',
        id:-1
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test ('should create an expense', ()=>{
   const expense ={ //si creas necesitas los nuevos datos de creacion 
    id:'109',
    description:'Laptop',
    note:'',
    createdAt:20000,
    amount:29500
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]); // que hiciste aca un spread operator
});

test ('should edit an expense', ()=>{// aca sabias pero no quisiste pensar tanto
    const amount = 122000;
    const action = { // action es un object acordate
        type: 'EDIT_EXPENSE',
        id:expenses[1].id,
        updates : {
            amount
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[1].amount).toBe(amount);
});

test ('should not edit an expense if id not found', ()=>{
    const amount = 122000;
    const action = {
        type: 'EDIT_EXPENSE',
        id:-1,
        updates: {
            amount
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});