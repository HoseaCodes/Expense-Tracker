import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');

    const {categories, addTransaction} = useContext(GlobalContext)

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 1000000000),
            text,
            amount: +amount,
            category
        }

        addTransaction(newTransaction);
        setText('')
        setAmount(0)
    }
    console.log(categories)
    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Item</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter expense or income..." />
                </div>
                
                <div className="form-control">
                    <label htmlFor="categories">Categories</label>
                    <select name="category" value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    >
                        {
                            categories.map(category => (
                                <option value={category.name} key={category.name}>
                                    {category.name}
                                </option>
                            ))
                        }
                    </select>
                </div>

                <div className="form-control">
                    <label htmlFor="amount"
                        >Amount <br />
                        (negative - expense, positive - income)</label
                    >
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}
