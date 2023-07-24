import { useState } from "react";
import Expense from "./components/expense/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

const INIT_EXPENSE = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(INIT_EXPENSE);
  const saveNewExpense = (data) => {
     setExpenses((previousExpense) => {
     return [data, ...previousExpense];
    });
  };
  return (
    <div>
      <NewExpense onSaveNewExpense={saveNewExpense} />
      <Expense data={expenses} />
    </div>
  );
}

export default App;
//always use key attribute when mapping array