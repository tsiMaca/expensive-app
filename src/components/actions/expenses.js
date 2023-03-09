import { getDatabase,ref, push, remove,onValue, update } from 'firebase/database';
import { db} from '../../firebase/firebase';
 
//ADD EXPENSE
  export const addExpense = (expense) => ({
            type: "ADD_EXPENSE",
            expense
});
export const startAddExpense = (expenseData ={}) =>{
  return (dispatch) => {
    const {
      description='', 
      note='',
      amount=0,
      createdAt =0 
    } = expenseData;
    const expense = { description, note, amount, createdAt };

    const db = getDatabase();
    const expensesRef = ref(db, 'expenses');
    push(expensesRef, expense).then((newExpenseRef) => {
      dispatch(addExpense({
        id: newExpenseRef.key,
        ...expense
      }));
    });
  }; 
};

//REMOVE EXPENSE
export const removeExpense = (({id} ={}) => ({
    type: 'REMOVE_EXPENSE',
    id
}))
  
  export const startRemoveExpense = ({ id } = {}) => {
    return (dispatch) => {
      const db = getDatabase();
      const expensesRef = ref(db, `expenses/${id}`);
      remove(expensesRef).then(() => {
        dispatch(removeExpense({ id }));
      });
    };
  };
  
  
//EDIT EXPENSE
export const editExpense = (id, updates) =>({ 
    type:"EDIT_EXPENSE",
    id,
    updates
});

export const startEditExpense = (id, updates) => {
  return (dispatch) => {
    const db = getDatabase();
    const expensesRef = ref(db, `expenses/${id}`);
    update(expensesRef, updates)
      .then(() => {
        dispatch(editExpense({ id, ...updates }));
      })
  };
};

// SET EXPENSE
export const setExpenses = (expenses) => ({
  type: "SET_EXPENSES",
  expenses,
});

export const startSetExpense = () => {
  return (dispatch) =>{
  
     const expensesRef = ref(db, `expenses`);
     onValue(expensesRef, (snapshot) => {
        const expenses= []; 
        snapshot.forEach(childSnapshot => {
          expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          })
        });
        dispatch(setExpenses(expenses))
    });
  }
}