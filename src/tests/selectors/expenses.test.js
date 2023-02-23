import moment from 'moment';
import selectExpenses from '../../components/selectors/expenses';
import expenses from '../fixtures/expenses';

test ('should filter by text value', () =>{ //ordenar por la e y default values para los otros
    const filters = {
        text:'e',
        sortBy:'date',
        startDate:undefined,
        endtDate:undefined
    }
    const result = selectExpenses(expenses, filters); // revisar el video en rapido pq no entendi un choto
    expect(result).toEqual([expenses[2],expenses[1]]) // si yo filtre por e el array en la posicion 2 que es credit (poeque tenemos el texto ordenado por la fecha) y tengo que ver solo esos dos filtrados

});

test('should filter by startDate', () => {
    const filters = {
      text: '',
      sortBy: 'date',
      startDate: moment(0),
      endDate: undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[0]]);
  });

  test('should filter by endDate', () => {
    const filters = {
      text: '',
      sortBy: 'date',
      startDate: undefined,
      endDate: moment(0).add(2, 'days')
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[0], expenses[1]]);
  });
  
  test('should sort by date', () => {
    const filters = {
      text: '',
      sortBy: 'date',
      startDate: undefined,
      endDate: undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
  });
  
test('should sort by amount', () => {
    const filters = {
      text: '',
      sortBy: 'amount',
      startDate: undefined,
      endDate: undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[1], expenses[2], expenses[0]]);
  });
  