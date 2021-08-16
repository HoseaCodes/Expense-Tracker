import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../context/GlobalState';
import moment from 'moment-timezone'

export const Transaction = ({ transaction }) => {

    const { categories, getCategories } = useContext(GlobalContext)
    const { deleteTransaction } = useContext(GlobalContext)
    const [category, setCategory] = useState();
    const [budget, setBudget] = useState();

    const sign = transaction.amount < 0 ? '-' : '+';

    const timeFormater = moment.utc(transaction.createdAt).format('MM/YYYY')

    useEffect(() => {
        getCategories();
        handleCategory()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function handleCategory() {
        categories.map((category) => {
            if (transaction.category === category.name) {
                setCategory(transaction.category)
                setBudget(category.budget)
            }
        })
    }

    const type = transaction.amount < 0 ? 'Expense' : 'Income';

    if (timeFormater === moment(Date.now()).format('MM/YYYY')) {
        return (
            <>
                <tr className={transaction.amount < 0 ? 'minus' : 'plus'}>
                    <td><span className={transaction.amount < 0 ? 'expense' : 'income'}>{type}</span></td>
                    <td>{category}</td>
                    <td>{budget}</td>
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
