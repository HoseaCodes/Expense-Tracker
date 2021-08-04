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
            <h3>History</h3>
            <ul id="list" className="list">
                {transactions.map(transaction => (
                    <Transaction key={transaction.id} transaction={transaction}/>
                ))}
            </ul>
            <h3>Archives</h3>
            <ul id="list" className="list">
                {transactions.map(transaction => (
                    <Archive key={transaction.id} transaction={transaction}/>
                ))}
            </ul>

        </>
    )
}
