import { useState } from "react";
import "./styles/Expenses.css";
import ExpenseItem from "./ExpenseItem";
import CardWrapper from "./CardWrapper";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [year, setYear] = useState("2023");
  const handleYearChange = (changedYear) => {
    setYear(changedYear);
  };

  return (
    <CardWrapper className="expenses">
      <ExpensesFilter selected={year} onYearChange={handleYearChange} />
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />

      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />

      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />

      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
    </CardWrapper>
  );
};

export default Expenses;
