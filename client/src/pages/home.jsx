import '../App.css';
import { Header } from '../components/header';
import { Balance } from '../components/balance';
import { IncomeExpense } from '../components/incomeexpense';
import { TransactionList } from '../components/transactionlist';
import {AddTransaction} from '../components/addtransaction';
import Categories from '../components/categories/categories';
import { AddCategory } from '../components/categories/addcategory';
import { Archive } from '../components/archive';

function Home() {
  return (
    < >
     <Header />
     <div className="app-container">
       <div>
        <Categories/>
       </div>
        <div className="container">
          <Balance/>
          <IncomeExpense/>
          <TransactionList/>
          </div>
        <Archive/>
        <div>
          <AddCategory/>
          <AddTransaction />
        </div>
     </div>
    </>
  );
}

export default Home;
