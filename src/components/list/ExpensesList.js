import ExpenseItem from "./ExpenseItem";
import "../__styles/ExpensesList.css";

const ExpensesList = (props) => {
  // Using a map function to iterate for every set of data from an array or user inputs.
  // expense can be named anything.
  // We are now rendering the expenses with matching years and not all of them at once.

  // Conditional return statement
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses this year</h2>;
  }

  return (
    <ul className="expenses-list">
      {
        // Using ternanry operator for conditional rendering
        // You can also use filteredExpenses.length === 0 && <p>No expenses found...</p>
        props.items.map((expense) => (
          <ExpenseItem
            // Using key={expense.id} is vital here, as it eliminates bugs in rendering the items.
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      }
    </ul>
  );
};

export default ExpensesList;
