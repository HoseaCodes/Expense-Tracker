import './App.css';
import { Header } from './components/header';
import { Balance } from './components/balance';
import { IncomeExpense } from './components/incomeexpense';
import { TransactionList } from './components/transactionlist';
import {AddTransaction} from './components/addtransaction';
import {GlobalProvider} from './context/GlobalState';
import Categories from './components/categories/categories';
import { AddCategory } from './components/categories/addcategory';

function App() {
  return (
    <GlobalProvider >
     <Header />
     <Categories/>
     <AddCategory/>
     <div className="container">
       <Balance/>
       <IncomeExpense/>
       <TransactionList/>
       <AddTransaction />
     </div>
    </GlobalProvider>
  );
}

export default App;
