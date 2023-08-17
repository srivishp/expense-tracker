import { useState } from "react";
import "../__styles/Expenses.css";
import CardWrapper from "./CardWrapper";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "../chart/ExpensesChart";

const Expenses = (props) => {
  const [year, setYear] = useState("2023");
  const handleYearChange = (changedYear) => {
    setYear(changedYear);
  };

  // We are filtering expenses based on the year.
  // filteredExpenses is an array that keeps only those items whose years match, that we select in the dropdown

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  return (
    <CardWrapper className="expenses">
      <ExpensesFilter selected={year} onYearChange={handleYearChange} />
      {/* Created separate ExpenseList component to cleanup this file */}
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </CardWrapper>
  );
};

export default Expenses;
