import './ExpenseDate.css';

const ExpenseDate = (props) => {
    const year = props.date.getFullYear();
    const month = props.date.toLocaleString('default', { month: 'long' });
    const day = props.date.toLocaleString('default', { day: '2-digit' });
    return (
        <div className="expense-date-div">
            <div className="expense-date-month">{month}</div>
            <div className="expense-date-year">{year}</div>
            <div className="expense-date-day">{day}</div>
        </div>
    ) 
} 

export default ExpenseDate;