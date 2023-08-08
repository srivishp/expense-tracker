// useState is a React hook. It is a built in function that returns an array with two items,
// [current value, function to change value].
import { useState } from "react";
import "./styles/ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import CardWrapper from "./CardWrapper";

const ExpenseItem = (props) => {
  // The array from useState can be de-structured as
  // [title, setTitle] and used in the DOM to reflect changes on the UI.
  // Here, we are REGISTERING THE STATE "props.title" as the current value.
  const [title, setTitle] = useState(props.title);
  const handleClick = () => {
    setTitle("Barbie");
    // Here, console log still shows the previous title, as it is not updated immediately
    console.log(title);
  };
  return (
    // Here, we are using a wrapper around other components of the UI. This is called composition.
    <CardWrapper className="expense-item">
      {/* This variable "dateProps" can be named anything  */}
      <ExpenseDate dateProps={props.date} />
      <div className="expense-item__description">
        <h2 className="expense-item h2">{title}</h2>
        <div className="expense-item__price">₹{props.amount}</div>
        {/* handleClick should be wriiten as handleClick and not as handleClick() 
            Because, using () will call a function when the file is parsed for the first time
            when the app loads, and not when we click the button.
        */}
        <button onClick={handleClick}>Test button</button>
      </div>
    </CardWrapper>
  );
};

export default ExpenseItem;
