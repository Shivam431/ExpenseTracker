import "./expenses.css";
import Card from "../UI/Cards";
import ExpenseFilter from "../expenseFilter/ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpenseChart";
import { useState } from "react";

function Expense(props) {
  const [defaultYear, setDefautlYear] = useState("2019");

  const changeFilter = (year) => {
    console.log(year);
    setDefautlYear(year);
  };
  const filteredExpense = props.data.filter((i) => {
    return i.date.getFullYear().toString() === defaultYear;
  });
  return (
    <Card className="expenses">
      <ExpenseFilter year={defaultYear} onChangeFilter={changeFilter} />
      <ExpensesChart expenses={filteredExpense} />
      <ExpensesList items={filteredExpense} />
    </Card>
  );
}
export default Expense;
