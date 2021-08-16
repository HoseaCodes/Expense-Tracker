import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

const initialState = {
    transactions: [],
    categories: [],
    error: null,
    loading: true,
    onEdit: false
}

//Create context
export const GlobalContext = createContext(initialState);

//Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions
    async function getTransactions() {
        try {
            const res = await axios.get('/api/transactions');
            dispatch({
                type: 'GET_TRANSACTIONS',
                payload: res.data.data
            })

        } catch (err) {
            dispatch({
                type: 'TRANSACTIONS_ERROR',
                payload: err.response.data.error
            })
        }
    }
    async function deleteTransaction(id) {
        try {
            await axios.delete(`/api/transactions/${id}`);

            dispatch({
                type: 'DELETE_TRANSACTION',
                payload: id
            });
        } catch (err) {
            dispatch({
                type: 'TRANSACTIONS_ERROR',
                payload: err.response.data.error
            })
        }

    }
    async function addTransaction(transaction) {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.post('/api/transactions', transaction, config);

            dispatch({
                type: 'ADD_TRANSACTION',
                payload: res.data.data
            });
        } catch (err) {
            dispatch({
                type: 'TRANSACTIONS_ERROR',
                payload: err.response.data.error
            })
        }

    }

    async function deleteCategory(id) {
        try {
            await axios.delete(`/api/categories/${id}`);

            dispatch({
                type: 'DELETE_CATEGORY',
                payload: id
            });
        } catch (err) {
            dispatch({
                type: 'TRANSACTIONS_ERROR',
                payload: err.response.data.error
            })
        }
    }

    async function getCategories() {
        try {
            const res = await axios.get('/api/categories');
            dispatch({
                type: 'GET_CATEGORIES',
                payload: res.data
            })

        } catch (err) {
            dispatch({
                type: 'TRANSACTIONS_ERROR',
                payload: err
            })
        }
    }

    async function addCategories(category) {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            // if (onEdit) {
            //     const res = await axios.put(`/api/category/${category._id}`, {name: category}, config)
            //     dispatch({
            //         type: 'EDIT_CATEGORY',
            //         payload: res.data.data
            //     });
            //     } else {
            const res = await axios.post('/api/categories', category, config)
            dispatch({
                type: 'ADD_CATEGORIES',
                payload: res.data.data
            });
            // }
        } catch (err) {
            dispatch({
                type: 'CATEGORIES_ERROR',
                payload: err
            })
        }

    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        categories: state.categories,
        error: state.error,
        loading: state.loading,
        onEdit: state.onEdit,
        deleteTransaction,
        addTransaction,
        getTransactions,
        getCategories,
        addCategories,
        deleteCategory,
    }}>
        {children}
    </GlobalContext.Provider>)
}