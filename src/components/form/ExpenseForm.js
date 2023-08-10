import { useState } from "react";
import "../__styles/ExpenseForm.css";

// We are adding props here because we want to send data from this component to other/parent components.
const ExpenseForm = (props) => {
  // useState is initialized with empty string because when it first loads, the text field is empty
  const [enteredTitle, setEnteredTitle] = useState("");

  // event.target.value is a string, even if you enter a number.
  // So, we give empty string for Amount as well.
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // event is a default JS object that will detect events.
  // This is where we get event.target.value from (F12 for more info),
  // which holds the current value of the input.
  const handleTitleChange = (event) => {
    setEnteredTitle(event.target.value);
    // we can log the current value at each keystorke using event.target.value
    // console.log(event.target.value);
  };

  const handleAmountChange = (event) => {
    setEnteredAmount(event.target.value);
  };

  const handleDateChange = (event) => {
    setEnteredDate(event.target.value);
  };

  // Submittting a form sends a request to the server and reloads the page, it is a default behaviour.
  // event.preventDefault() is a built in method that doesn't allow this activity.
  // So, we can continue handling our data as it won't be refreshed, and stays loaded on the page.
  const handleSubmit = (event) => {
    event.preventDefault();

    // title, amount and date can be named anything here...
    // using built in Date function to display a readable date
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount, //+ is added to enforce the amount as number and not a string
      date: new Date(enteredDate),
    };

    // onSaveExpenseData will send the expenseData to other/parent components via props.
    // Right now, it is sending data to NewExpense, which is the parent component.
    props.onSaveExpenseData(expenseData);
    // We will now clear the data from the input as the user has now submitted the form.
    // We have added two-way binding below, so the data isn't lost.
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          {/* 
          We are now listening for changes (onChange) in the input 
          and also assigning the received value back to the input 
          by adding value={enteredTitle}.
          
          This is called two-way binding and this process is used to gather user information.
          */}
          <input
            type="text"
            value={enteredTitle}
            //onChange can detect changes at every keystroke.
            onChange={handleTitleChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount (₹)</label>
          <input
            type="number"
            value={enteredAmount}
            min="0"
            onChange={handleAmountChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={enteredDate} onChange={handleDateChange} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={props.onCancel} type="button">
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
