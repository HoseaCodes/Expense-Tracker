import React, { useContext, useEffect, useState } from 'react'
import { Transaction } from './transaction';
import { GlobalContext } from '../context/GlobalState';
import moment from 'moment-timezone'

export const TransactionList = () => {
    const { transactions, getTransactions } = useContext(GlobalContext)
    const [liability, setLiability] = useState(0)
    const [disposable, setDisposable] = useState(0)
    const [income, setIncome] = useState(0)

    useEffect(() => {
        getTransactions();
        getTotals(transactions);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function getTotals(transactions) {
        let totalLiability = 0
        let disposableIncome = 0
        for (let i = 0; i < transactions.length; i++) {
            const timeFormater = moment.utc(transactions[i].createdAt).format('MM/YYYY')
            if (timeFormater === moment(Date.now()).format('MM/YYYY')) {
                if (transactions[i].amount < 0) {
                    disposableIncome += transactions[i].amount
                } else {
                    totalLiability = totalLiability + transactions[i].amount
                }
            }
        }
        setLiability(totalLiability);
        setDisposable(disposableIncome)
    }

    const sign = disposable < 0 ? '-' : '+';

    return (
        <>
            <h3>Current Month</h3>
            <table class="table" border='0'>
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Category</th>
                        <th>Budget</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th><span>🗑</span></th>
                    </tr>
                </thead>

                <tbody id="list" className="list">
                    {transactions.map(transaction => (
                        <Transaction key={transaction.id} transaction={transaction} />
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="3">Total Liability</td>
                        <td colspan="4">${liability}</td>
                    </tr>
                    <tr>
                        <td colspan="3">Disposable Income</td>
                        <td colspan="4">{sign}${Math.abs(disposable)}</td>
                    </tr>
                    <tr>
                        <td colspan="3">Monthly Net Income</td>
                        <td colspan="4">${income}</td>
                    </tr>
                </tfoot>
            </table>
        </>
    )
}
