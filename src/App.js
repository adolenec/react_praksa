
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";


function App() {

  const expenseItems = [
    {
      id: '1',
      name: 'Toilet Paper',
      amount: '94.12',
      date: new Date(2020, 2, 14),
    },
    { 
      id: '2',
      name: 'New TV',
      amount: '799.49',
      date: new Date(2020, 2, 12), 
    },  
    {
      id: '3',
      name: 'Car Insurance',
      amount: '294.67',
      date: new Date(2020, 2, 28),
    },
    {
      id: '4',
      name: 'New Desk (Wooden)',
      amount: '450',
      date: new Date(2020, 5, 12),
    },
  ]

  const addExpense = (expense) =>{
    // const newExpense = {
    //   ...expense
    // }
    console.log(expense);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpense} />
      <Expenses items={expenseItems}/>
    </div>
  );
}

export default App;
