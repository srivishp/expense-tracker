import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
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
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>

      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>

      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>

      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
