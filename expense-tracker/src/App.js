import React, { useState } from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_DATA = [
  {title: "Gym",
amount:300,
date: new Date(10, 6, 2021),},
{title: "Rent",
amount:3000,
date: new Date(2021, 12, 10),},
{title: "Car Insurance",
amount:100,
date: new Date(2021, 12, 9),},
{title: "Restaurant",
amount:100,
date: new Date(2021, 12, 18),},
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_DATA);

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
