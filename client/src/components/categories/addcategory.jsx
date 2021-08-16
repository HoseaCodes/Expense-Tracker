import React, { useState, useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'

export const AddCategory = () => {
    const [name, setName] = useState('');
    const [budget, setBudget] = useState(0);

    const { addCategories } = useContext(GlobalContext)

    const onSubmit = e => {

        const newCategory = {
            name: name,
            budget: budget,
        }

        e.preventDefault();
        addCategories(newCategory);
        setName('')
        setBudget(0)
    }
    return (
        <div>
            <h3>Add new category</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Category</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter category..." />
                    <label htmlFor="number">Budget</label>
                    <input type="number" value={budget} onChange={(e) => setBudget(e.target.value)} placeholder="Enter budget..." />
                </div>
                <button className="btn">Add Category</button>
            </form>
        </div>
    )
}
