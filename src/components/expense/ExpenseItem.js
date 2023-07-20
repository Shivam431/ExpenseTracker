import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Cards";
import { useState } from "react";


function ExpenseItem(props) {

  const[title,setTitle]=useState(props.title)
  const clickHandler = () => {
    setTitle("new title");
   // console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>change Title</button>
    </Card>
  );
}

export default ExpenseItem;
