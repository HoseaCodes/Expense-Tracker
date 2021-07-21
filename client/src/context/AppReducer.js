export default (state, action ) => {
    switch(action.type) {
        case 'GET_CATEGORIES':
            return {
                ...state,
                loading: false,
                categories: action.payload
            }
        case 'ADD_CATEGORIES':
            return {
                ...state,
                categories: [...state.categories, action.payload]
            }
        case 'DELETE_CATEGORY':
            return {
                ...state,
                categories: state.categories.filter(
                    category => category._id !== action.payload)
            }
        case 'GET_TRANSACTION':
            return {
                ...state,
                loading: false,
                transactions: action.payload
            }
        case 'TRANSACTIONS_ERROR':
            return {
                ...state,
                error: action.payload
            }
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(
                    transaction => transaction._id !== action.payload)
            }
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [...state.transactions, action.payload ]
            }
        default: 
        return state;
    }
}