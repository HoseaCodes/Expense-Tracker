import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';
import moment from 'moment-timezone'

export const Transaction = ({transaction}) => {

    const {deleteTransaction} = useContext(GlobalContext)

    const sign = transaction.amount < 0 ? '-' : '+';

    const timeFormater = moment.utc(transaction.createdAt).format('MM/YYYY')

 
    const type = transaction.amount < 0 ? 'Expense' : 'Income';

    if (timeFormater === moment(Date.now()).format('MM/YYYY')) {
    return (
        <>
        <tr className={transaction.amount < 0 ? 'minus' : 'plus'}>
            <td><span className={transaction.amount < 0 ? 'expense' : 'income'}>{type}</span></td>
            <td>{transaction.category}</td>
            <td>{transaction.text}</td> 
            <td>{sign}${Math.abs(transaction.amount)}</td>
            <td>{timeFormater}</td>
            <td>
            <button className="delete-btn-table"
            onClick={() => deleteTransaction(transaction._id)}
            >X</button>
            </td>
        </tr>
        </>
    )
    } else {
        return null
    }
}
