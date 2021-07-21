import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import {Category} from './category';

function Categories() {
    const {categories, getCategories} = useContext(GlobalContext)
    
    useEffect(() => {
        getCategories();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // const editCategory = async (id, name) => {
    //     setID(id)
    //     setCategory(name)
    //     setOnEdit(true)
    // }

    // const deleteCategory = async id => {
    //     console.log(id)
    //     try {
    //         const res = await axios.delete(`/api/category/${id}`, {
    //             headers: { Authorization: token }
    //         })
    //         alert(res.data.msg)
    //         setCallback(!callback)
    //     } catch (err) {
    //         alert(err.response.data.msg)
    //     }
    // }

    return (
        <div className="categories">
            {/* <form onSubmit={createCategory}>
                <label htmlFor="category">Category</label>
                <input type="text" name="category" value={category} required
                    onChange={e => setCategory(e.target.value)} />
                <button type="submit">{onEdit ? 'Update' : 'Create'}</button>
            </form> */}
            <div className="col">
                <ul id="list" className="list">
                {
                    categories.map(category => (
                        <Category key={category.id} category={category}/>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Categories;