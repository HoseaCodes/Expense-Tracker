import React, {useContext} from 'react'
import {GlobalContext} from '../../context/GlobalState';

export const Category = ({category}) => {

    const {deleteCategory} = useContext(GlobalContext)

    return (
        <li >
            {category.name}
            <button 
            className="delete-btn"
            onClick={() => deleteCategory(category._id)}
            >X</button>
        </li>
    )
}
