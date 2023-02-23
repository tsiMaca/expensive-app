import moment from 'moment';
import { setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate } from "../../components/actions/filters";

test ('should generate set start date action object', () =>{
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate:moment(0)
    });

});

test ('should generate set end date action object', () =>{
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate:moment(0)
    });
});

test('should generate set textt filter',() => {
    const text ='something';
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    });
});
test('should generate set textt filter with default',() => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text:''
    });
});

test('should generate sort by date',() => {
  expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE'}) //Porque no neceista algo con que compararse?
});

test('should generate sort by amount',() => {
  expect(sortByAmount()).toEqual({type: 'SORT_BY_AMOUNT'})
});
