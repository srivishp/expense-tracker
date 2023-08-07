import "./componentStyles/ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      {/* This variable "dateProps" can be named anything  */}
      <ExpenseDate dateProps={props.date} />
      <div className="expense-item__description">
        <h2 className="expense-item h2">{props.title}</h2>
        <div className="expense-item__price">₹{props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
