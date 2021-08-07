import './App.css';
import { Header } from './components/header';
import { Balance } from './components/balance';
import { IncomeExpense } from './components/incomeexpense';
import { TransactionList } from './components/transactionlist';
import {AddTransaction} from './components/addtransaction';
import {GlobalProvider} from './context/GlobalState';
import Categories from './components/categories/categories';
import { AddCategory } from './components/categories/addcategory';
import { Archive } from './components/archive';

function App() {
  return (
    <GlobalProvider >
     <Header />
     <div className="app-container">
        <Categories/>
        <AddCategory/>
        <div className="container">
          <Balance/>
          <IncomeExpense/>
          <TransactionList/>
          <AddTransaction />
        </div>
        <Archive/>
     </div>
    </GlobalProvider>
  );
}

export default App;
