import moment from 'moment';
//Get visible expenses
// eslint-disable-next-line import/no-anonymous-default-export
export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
      const createdAtMoment = moment(expense.createdAt);
      const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
      const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
      const textMatch = expense?.description?.toLowerCase().includes(text.toLowerCase());
  
      return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === 'amount') {
        return a.amount < b.amount ? 1 : -1;
      }
    });
  };
  