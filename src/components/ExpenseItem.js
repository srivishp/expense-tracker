import "./styles/ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import CardWrapper from "./CardWrapper";

function ExpenseItem(props) {
  return (
    // Here, we are using a wrapper around other components of the UI. This is called composition.
    <CardWrapper className="expense-item">
      {/* This variable "dateProps" can be named anything  */}
      <ExpenseDate dateProps={props.date} />
      <div className="expense-item__description">
        <h2 className="expense-item h2">{props.title}</h2>
        <div className="expense-item__price">₹{props.amount}</div>
      </div>
    </CardWrapper>
  );
}

export default ExpenseItem;
