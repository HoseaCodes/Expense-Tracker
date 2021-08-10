import React, {useContext, useEffect, useState} from 'react'
import {GlobalContext} from '../context/GlobalState';
import moment from 'moment-timezone'
import { numberWithCommas } from '../utils/format';


export const Archive = () => {        
    const {transactions, getTransactions, deleteTransaction} = useContext(GlobalContext)
    const [toggle, setToggle] = useState(true);
    const [isOpen, setIsopen] = useState(true);

    useEffect(() => {
        getTransactions();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    const newTransactionList = []

    const archiveList = transactions.map(transaction => {
        if (moment.utc(transaction.createdAt).format('MM/YYYY') !== moment(Date.now()).format('MM/YYYY')) {
            newTransactionList.push(transaction);
        }
        const date = moment.utc(transaction.createdAt).format('MMMM');
        console.log(date.toLocaleString('default', { month: 'long' }))
    })

    const months = newTransactionList.map(month =>  moment.utc(month.createdAt).format('MMMM'));

    const amounts = newTransactionList.map(transaction => transaction.amount);

    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    
    const transactionStyle = {
        display: 'grid',
        gridTemplateColumns: '1fr 20px',
        gridColumnGap: '12px',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    }

    function renderArchive() {
        setToggle(!toggle)
    }

    function renderAlert() {
        setIsopen(false)
    }

    if (newTransactionList || archiveList) {
        return (
            <div>
            <h3>{months[0]}'s Archives</h3>
            <h5>Total Expenditures</h5>
            <h2 id="balance" onClick={renderArchive}
            onMouseEnter={renderAlert}
            >${numberWithCommas(total)}</h2> 
            <div className={`${isOpen ? 'alert alert-warning alert-dismissible fade show' : 'archive'}`}
            class="alert alert-warning alert-dismissible fade show" 
            role="alert">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
                    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>
                Click above to find more.
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            <ul id="list" className={`${toggle ? 'list archive' : 'list'} `}>
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
                <a href="/">View More Archives</a>
                </ul>
            </div>
        )
    } else {return null;}
}
