import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DateRangePicker } from "react-dates";
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate,
} from "../components/actions/filters";

const ExpenseListFilters = () => {
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();
  const [calendarFocused, setCalendarFocused] = useState(null);

  const onDatesChange = ({ startDate, endDate }) => {
    dispatch(setStartDate(startDate));
    dispatch(setEndDate(endDate));
  };    

  const onFocusChange = (calendarFocused) => {
    setCalendarFocused(calendarFocused);
  };

  const onTextChange = (e) => {
    dispatch(setTextFilter(e.target.value));
  };

  const onSortChange = (e) => {
    if (e.target.value === "date") {
      dispatch(sortByDate());
    } else if (e.target.value === "amount") {
      dispatch(sortByAmount());
    }
  };

  return (
    <div className="content-container">
      <div className="input-group">
        <div className="input-group__item">
          <input
            type="text"
            className="text-input"
            placeholder="Search expenses"
            value={filters.text}
            onChange={onTextChange}
          />
        </div>
        <div className="input-group__item">
          <select value={filters.sortBy} 
                  className ="select"
                  onChange={onSortChange}>
            <option value="date">Date</option>
            <option value="amount">Amount</option>
          </select>
        </div>

        <div className="input-group__item">
          <DateRangePicker
            startDate={filters.startDate}
            endDate={filters.endDate}
            onDatesChange={onDatesChange}
            focusedInput={calendarFocused}
            onFocusChange={onFocusChange}
            showClearDates={true}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
        </div>
      </div>
    </div>
  );
};

export default ExpenseListFilters;
