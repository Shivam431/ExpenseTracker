import React from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isAdd, setAdd] = React.useState(false);
  const saveExpenseData = (ExpenseData) => {
    const expenseData = {
      ...ExpenseData,
      id: Math.random().toString(),
    };
    props.onSaveNewExpense(expenseData);
    setAdd(false);
  };

  const clickListner = () => {
    setAdd(true);
  };

  const stopAdding = () => {
    setAdd(false);
  };
  return (
    <div className="new-expense">
      {!isAdd && <button onClick={clickListner}>Add New Expense</button>}
      {isAdd && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseData}
          onCancel={stopAdding}
        />
      )}
    </div>
  );
};

export default NewExpense;
