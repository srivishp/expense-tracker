import "./componentStyles/ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem({ date, title, amount }) {
  return (
    <div className="expense-item">
      {/* This variable "dateProps" can be named anything  */}
      <ExpenseDate dateProps={date} />
      <div className="expense-item__description">
        <h2 className="expense-item h2">{title}</h2>
        <div className="expense-item__price">₹{amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
