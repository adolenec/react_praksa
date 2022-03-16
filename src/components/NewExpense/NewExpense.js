import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const newExpense = (props) => {

    const sendExpense = (expense) => {
        const newExpense = {
            ...expense,
            id : Math.random().toString()
        }
        props.onAddExpense(newExpense);
    }

    return (
        <div className='new-expense-div'>
            <ExpenseForm onSendExpense={sendExpense}/>
        </div>
    )
}

export default newExpense;