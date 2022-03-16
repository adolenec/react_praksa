import React, { useState } from 'react';

import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {

    const [filteredYear, setFilterValue] = useState('2020');

    const filterYear = (filteredValue) => {
        console.log(filteredValue);
        setFilterValue(filteredValue);
    }

    return (
        <div className="expenses">
            <ExpensesFilter onFilterHandler={filterYear} selected={filteredYear}/>
            <ExpenseItem name={props.items[0].name} amount={props.items[0].amount} date={props.items[0].date} />
            <ExpenseItem name={props.items[1].name} amount={props.items[1].amount} date={props.items[1].date} />
            <ExpenseItem name={props.items[2].name} amount={props.items[2].amount} date={props.items[2].date} />
            <ExpenseItem name={props.items[3].name} amount={props.items[3].amount} date={props.items[3].date} />
        </div>
    );
}  

export default Expenses;   