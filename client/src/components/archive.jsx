import React, {useContext, useEffect} from 'react'
import {GlobalContext} from '../context/GlobalState';
import moment from 'moment-timezone'
import { numberWithCommas } from '../utils/format';


export const Archive = () => {        
    const {transactions, getTransactions, deleteTransaction} = useContext(GlobalContext)
    
    useEffect(() => {
        getTransactions();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    const newTransactionList = []
    const archiveList = transactions.map(transaction => {
        if (moment.utc(transaction.createdAt).format('MM/YYYY') !== moment(Date.now()).format('MM/YYYY')) {
            newTransactionList.push(transaction);
                const sign = transaction.amount < 0 ? '-' : '+';

        }
    })
    const amounts = newTransactionList.map(transaction => transaction.amount);

    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    

    newTransactionList.map(transaction => console.log(transaction))
    const transactionStyle = {
        display: 'grid',
        gridTemplateColumns: '1fr 20px',
        gridColumnGap: '12px',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    }

    if (newTransactionList || archiveList) {
        return (
            <div>
            <h4>Total Expenditures</h4>
            <h1 id="balance">${numberWithCommas(total)}</h1> 
            <h3>Pev. Month's Archives</h3>
            <ul id="list" className="list">
                {newTransactionList.map(transaction => (
                    <div style={transactionStyle}>
                        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
                            {transaction.text}
                            <span>{transaction.amount < 0 ? '-' : '+'}${Math.abs(transaction.amount)}</span>
                            <button 
                            onClick={() => deleteTransaction(transaction._id)}
                            className="delete-btn">X</button>
                        </li>
                        <span>{ moment.utc(transaction.createdAt).format('MM/YYYY')}</span>
                    </div>
                    ))}
                </ul>
            </div>
        )
    } else {return null;}
}
