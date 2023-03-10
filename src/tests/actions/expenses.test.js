import {removeExpense, editExpense, addExpense}  from "../../components/actions/expenses";

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
      type: 'REMOVE_EXPENSE',
      id: '123abc'
    });
  });
  

  test('should setup edit expense action object', () => {
    const action = editExpense('123abc', {description:'rent'});
    expect(action).toEqual({
      type: 'EDIT_EXPENSE',
      id: '123abc',
      updates:{
        description:'rent'
      }
    });
  });
  
  test('should setup add expense action object with provided values', () => {
    const expenseData = 
     { description:'Rent', 
         note:'This was last months rent',
         amount:1095,
         createdAt:1000,

    };
    const action = addExpense(expenseData)
    expect(action).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        ...expenseData,
        id:expect.any(String)
      }
    });
  });

  test('should setup add expense action object with no data', () => {
  
    const action = addExpense()
    expect(action).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id:expect.any(String),
        description:'', 
        note:'',
        amount:0,
        createdAt:0,
      }
    });
  });