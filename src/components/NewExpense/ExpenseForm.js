import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
  // const[title, setTitle] = useState('');
  // const[price, setPrice] = useState('')
  // const[date, setDate] = useState('')

  const [userInputs, setUserInputs] = useState({
    title: "",
    price: "",
    date: "",
  });

  const titleHandler = (event) => {
    // setUserInputs({
    //     ...userInputs,
    //     title: event.target.value
    // })

    //prevState : return last updated state snapshot uses when state update depends on the previous state

    setUserInputs((prevState) => {
      return { ...prevState, title: event.target.value };
    });
  };

  const priceHandler = (event) => {
    setUserInputs((prevState) => {
      return { ...prevState, price: event.target.value };
    });
  };

  const dateHandler = (event) => {
    setUserInputs((prevState) => {
      return { ...prevState, date: event.target.value };
    });
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={priceHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
