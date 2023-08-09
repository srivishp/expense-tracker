import { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Oppenheimer",
    amount: 809,
    date: new Date(2023, 7, 22),
  },
  {
    id: "e2",
    title: "Mission Impossible: Dead Reckoning Part One",
    amount: 1218,
    date: new Date(2023, 7, 15),
  },
  {
    id: "e3",
    title: "Spiderman: Across the Spiderverse",
    amount: 459,
    date: new Date(2023, 6, 4),
  },
  {
    id: "e4",
    title: "The Super Mario Bros. Movie",
    amount: 178,
    date: new Date(2023, 4, 8),
  },
  {
    id: "e5",
    title: "Minecraft",
    amount: 2000,
    date: new Date(2021, 6, 10),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  // passing data from child component is called lifting the state up
  const handleAddExpense = (expense) => {
    // We are adding a new expense to the beginning of the pre existing data in the array.
    //setExpenses([expense, ...expenses]);
    // Cleaner way of updating an array based on previous values.
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });

    console.log(expenses);
  };

  return (
    <div>
      {/* onAddExpense is set as props to get data from NewExpense, which is a child component */}
      <NewExpense onAddExpense={handleAddExpense} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
