import Expensedata from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No Expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <Expensedata
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        ></Expensedata>
      ))}
    </ul>
  );
};

export default ExpensesList;
