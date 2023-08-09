import { useState } from "react";
import "../__styles/NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [editing, setIsEditing] = useState(false);
  // enteredExpenseData parameter can be named anything.
  // It is taking the value of the expenseData from ExpenseForm.
  const handleSaveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      // adding id to the data
      id: Math.random().toString(),
      // ... is the spread operator. It will add key value pairs from other objects to this one.
      ...enteredExpenseData,
    };
    // sending data to App.js via props, which is a parent component.
    props.onAddExpense(expenseData);
  };

  const handleEditing = () => {
    setIsEditing(true);
  };

  const stopEditing = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!editing && <button onClick={handleEditing}>Add New Expense</button>}
      {/* onSaveExpenseData can be named anything. It is a prop we are setting to take a function as a value
          We are using this prop to get the data from ExpenseForm, which is a child component.
      */}
      {editing && (
        <ExpenseForm
          onCancel={stopEditing}
          onSaveExpenseData={handleSaveExpenseData}
        />
      )}
    </div>
  );
};

export default NewExpense;
