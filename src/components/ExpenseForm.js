import React from "react";
import { useState } from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

const ExpenseForm = (props) => {
  const [createdAt, setCreatedAt] = useState(
    props.expense ? moment(props.expense.createdAt) : moment()
  );
  const onDateChange = (createdAt) => {
    setCreatedAt(() => createdAt);
  };
  const [calendarFocused, setCalendarFocused] = useState(false);
  const onFocusChange = ({ focused }) => {
    setCalendarFocused(focused);
  };

  const [description, setDescription] = useState(
    props.expense ? props.expense.description : ""
  );
  const onDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const [note, setNote] = useState(props.expense ? props.expense.note : "");
  const onNoteChange = (e) => {
    setNote(e.target.value);
  };

  const [amount, setAmount] = useState(
    props.expense ? (props.expense.amount / 100).toString() : ""
  );
  const onAamountChange = (e) => {
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/gm)) {
      setAmount(e.target.value);
    }
  };
  const [error, setError] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount) {
      setError("Please complete the description and amount");
    } else {
      setError("");
      props.onSubmit({
        description,
        amount: parseFloat(amount, 10) * 100,
        createdAt: createdAt.valueOf(),
        note: note,
      });
    }
  };

  return (
    <div>
      {error && <p className="form__error">{error}</p>}
      <form  
        className="form"
        onSubmit={onSubmit}>
        <input
          type="text"
          className="text-input"
          placeholder="Description"
          autoFocus
          value={description}
          onChange={onDescriptionChange}
        />
        <input
          type="text"
          className="text-input"
          value={amount}
          placeholder="Amount"
          onChange={onAamountChange}
        />
        <SingleDatePicker
          date={createdAt}
          onDateChange={onDateChange}
          focused={calendarFocused}
          onFocusChange={onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
        <textarea
          className="textarea"
          placeholder="Add a note for your expense (optional)"
          value={note}
          onChange={onNoteChange}
        />
        <div>
          <button className="button">Save Expense</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
