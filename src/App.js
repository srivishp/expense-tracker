import Expenses from "./components/Expenses";

const App = () => {
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
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
