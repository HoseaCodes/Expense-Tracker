import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';
import moment from 'moment-timezone'

export const Transaction = ({transaction}) => {

    const {deleteTransaction} = useContext(GlobalContext)

    const sign = transaction.amount < 0 ? '-' : '+';

    const timeFormater = moment.utc(transaction.createdAt).format('MM/YYYY')

    const transactionStyle = {
        display: 'grid',
        gridTemplateColumns: '1fr 20px',
        gridColumnGap: '12px',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    }

    return (
        <div style={transactionStyle}>
            <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
                {transaction.text}
                <span>{sign}${Math.abs(transaction.amount)}</span>
                <button 
                onClick={() => deleteTransaction(transaction._id)}
                className="delete-btn">X</button>
            </li>
            <span>{timeFormater}</span>
        </div>
    )
}
