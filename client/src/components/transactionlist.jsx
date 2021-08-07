import React, {useContext, useEffect} from 'react'
import {Transaction} from './transaction';
import {Archive} from './archive';
import {GlobalContext} from '../context/GlobalState';

export const TransactionList = () => {
    const {transactions, getTransactions} = useContext(GlobalContext)

    useEffect(() => {
        getTransactions();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
    return (
        <>
            <h3>Current Month</h3>
            <ul id="list" className="list">
                {transactions.map(transaction => (
                    <Transaction key={transaction.id} transaction={transaction}/>
                ))}
            </ul>
        </>
    )
}
