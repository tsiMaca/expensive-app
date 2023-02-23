import React from 'react';
import { useState } from 'react';
import moment from 'moment'
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css'
import { Link } from 'react-router-dom';

const ExpenseForm = (props) => {
    console.log('expense form props al')

   const [createdAt, setCreatedAt] = useState(props.expense ? moment(props.expense.createdAt) : moment());
   const onDateChange = (createdAt) =>{
        setCreatedAt(()=>createdAt)
   }
   const [calendarFocused, setCalendarFocused] = useState(false)
   const onFocusChange = ({focused})=> {
    setCalendarFocused(focused  )
   }

   
   const [description, setDescription] = useState(props.expense ? props.expense.description : '');
   const onDescriptionChange =(e) => {
    setDescription(e.target.value)
   }

   const [note,setNote] = useState(props.expense ? props.expense.note : '');
   const onNoteChange =(e)=>{
    setNote(e.target.value)
   }

   const [amount, setAmount]=useState(props.expense ? (props.expense.amount/ 100).toString() : '')
   const onAamountChange =(e) =>{
    if ( !amount ||amount.match( /^\d{1,}(\.\d{0,2})?$/gm ) ){
        setAmount(e.target.value)
   }}
   const [error, setError] = useState('');

   const onSubmit = (e) =>{
    e.preventDefault()
    if (!description||!amount) {
       setError('Please complete the description and amount')
    } else {
        setError('');
        props.onSubmit({
            description,
            amount:parseFloat(amount,10)*100,
            createdAt: createdAt.valueOf(),
            note:note


        })
        console.log("debo mandar este object ", props.amount)
    } 
    }


     
    
   return (
        <div>
            {error && <p>{error}</p> }
           <form onSubmit = {onSubmit}>
            <input 
                type="text"
                placeholder='Description'
                autoFocus
                value={description}
                onChange ={onDescriptionChange}
                />
            <input 
                type="text"
                value={amount}
                placeholder='Amount'
                onChange={ onAamountChange}
                />
            <SingleDatePicker
                date={createdAt}
                onDateChange={onDateChange}
                focused={calendarFocused    }
                onFocusChange={onFocusChange}
                numberOfMonths={1}
                isOutsideRange={()=>false}
            />
            <textarea
                placeholder="Add a note for your expense (optional)"
                value={note}
                onChange ={onNoteChange}
            />
           
                <button >
                    Add Expense
                    
                </button>
           </form>
        </div>
    );
};


export default ExpenseForm;