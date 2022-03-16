import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [nameValue, setNameValue] = useState('');
    const [amountValue, setAmountValue] = useState('');
    const [dateValue, setDateValue] = useState('');

    const nameInputHandler = (e) =>{
        setNameValue(e.target.value);
    }

    const amountInputHandler = (e) =>{
        setAmountValue(e.target.value);
    }

    const dateInputHandler = (e) =>{
        setDateValue(e.target.value);
    }

    const submitHandler = (e) =>{
        e.preventDefault();
        const expenseData = {
            name: nameValue,
            amount: amountValue,
            date: new Date(dateValue)
        }
        props.onSendExpense(expenseData);
        setNameValue('');
        setAmountValue('');
        setDateValue('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="form-elements">
                <div className="form-element">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" value={nameValue} onChange={nameInputHandler}/>
                </div>
                <div className="form-element">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" id="amount" step="0.01" value={amountValue} onChange={amountInputHandler}/>
                </div>
                <div className="form-element">
                    <label htmlFor="date">Date</label>
                    <input type="date" id="date" min="2019-01-01" max="2022-31-12" value={dateValue} onChange={dateInputHandler}/>
                </div>
            </div>
            <div>
                <button className='form-btn'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;