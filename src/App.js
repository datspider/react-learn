import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenseItem = [
    {
      id: "1",
      title: "Insurance",
      amount: 182,
      date: new Date(2021, 2, 12),
    },
    {
      id: "2",
      title: "Keyboard",
      amount: 200,
      date: new Date(2021, 1, 29),
    },
    {
      id: "3",
      title: "PC",
      amount: 1099,
      date: new Date(2021, 5, 21),
    },
    {
      id: "4",
      title: "Paper",
      amount: 23,
      date: new Date(2021, 6, 23),
    },
  ];
  return (
    <div className="App">
      <h1>Hi, I am a react app</h1>
      <p>This is really work</p>
      <ExpenseItem
        title={expenseItem[0].title}
        amount={expenseItem[0].amount}
        date={expenseItem[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenseItem[1].title}
        amount={expenseItem[1].amount}
        date={expenseItem[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenseItem[2].title}
        amount={expenseItem[2].amount}
        date={expenseItem[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenseItem[3].title}
        amount={expenseItem[3].amount}
        date={expenseItem[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
