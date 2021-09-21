import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

const initialState = {
    transactions: [],
    categories: [],
    user: [],
    token: null,
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
    async function getUser(token) {
        try {
            const res = await axios.get("/user/info", {
                headers: { Authorization: token },
            });
            dispatch({
                type: 'GET_USER',
                payload: res.data
            })

        } catch (err) {
            dispatch({
                type: 'USER_ERROR',
                payload: err
            })
        }
    };

    async function getRefreshToken() {
        try {
            const res = await axios.get("/user/refresh_token");
            dispatch({
                type: 'REFRSH_TOKEN',
                payload: res.data.accesstoken
            })

        } catch (err) {
            dispatch({
                type: 'USER_ERROR',
                payload: err
            })
        }
    };

    async function loginSubmit(user) {
        try {
            const res = await axios.post("/user/login", user);
            localStorage.setItem("firstLogin", true);
            // window.location.href = "/profile";
            dispatch({
                type: 'LOGIN_USER',
                payload: res.data.user
            })
        } catch (err) {
            dispatch({
                type: 'USER_ERROR',
                payload: err
            })
        }

    };

    async function register(user) {

        try {
            const res = await axios.post("user/register", { ...user });
            localStorage.setItem("firstLogin", true);
            dispatch({
                type: 'REGISTER_USER',
                payload: res.data.data
            })
        } catch (err) {
            dispatch({
                type: 'USER_ERROR',
                payload: err.response.data.error
            })
        }

    };

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
                type: 'CATEGORIES_ERROR',
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
                type: 'CATEGORIES_ERROR',
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
        user: state.user,
        token: state.token,
        error: state.error,
        loading: state.loading,
        onEdit: state.onEdit,
        deleteTransaction,
        addTransaction,
        getTransactions,
        getCategories,
        addCategories,
        deleteCategory,
        getUser,
        getRefreshToken,
        loginSubmit,
        register
    }}>
        {children}
    </GlobalContext.Provider>)
}