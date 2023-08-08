import "./styles/NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  // enteredExpenseData parameter can be named anything.
  // It is taking the value of the expenseData from ExpenseForm.
  const handleSaveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      // ... is the spread operator. It will add key value pairs from other objects to this one.
      ...enteredExpenseData,
      // adding id to the data
      id: Math.random().toString(),
    };
    // sending data to App.js via props, which is a parent component.
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      {/* onSaveExpenseData can be named anything. It is a prop we are setting to take a function as a value
          We are using this prop to get the data from ExpenseForm, which is a child component.
      */}
      <ExpenseForm onSaveExpenseData={handleSaveExpenseData} />
    </div>
  );
};

export default NewExpense;
