import "./expenses.css";
import Expensedata from './ExpenseItem';
import Card from '../UI/Cards';


function Expense(props) {
  return (
    <Card className="expenses">
      <Expensedata
        title={props.data[0].title}
        amount={props.data[0].amount}
        date={props.data[0].date}
      ></Expensedata>
       <Expensedata
        title={props.data[1].title}
        amount={props.data[1].amount}
        date={props.data[1].date}
      ></Expensedata>
       <Expensedata
        title={props.data[2].title}
        amount={props.data[2].amount}
        date={props.data[2].date}
      ></Expensedata>
       <Expensedata
        title={props.data[3].title}
        amount={props.data[3].amount}
        date={props.data[3].date}
      ></Expensedata>
      
    </Card>
  );
}
export default Expense;
