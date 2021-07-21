import React, {useState, useContext} from 'react'
import { GlobalContext } from '../../context/GlobalState'

export const AddCategory = () => {
    const [name, setName] = useState('');

    const {addCategories} = useContext(GlobalContext)

    const onSubmit = e => {
        e.preventDefault();
        addCategories(name);
        setName('')
    }
    return (
        <>
            <h3>Add new category</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter category..." />
                </div>
                <button className="btn">Add Category</button>
            </form>
        </>
    )
}
