import ExpenseDate from "./ExpenseDate";
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    return (
        <div className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="item-description">
                <h2>{props.name}</h2>
                <div className="amount-item">${props.amount}</div>
            </div>
        </div>
    ); 
} 

export default ExpenseItem;