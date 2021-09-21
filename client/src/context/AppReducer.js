export default (state, action) => {
    switch (action.type) {
        case 'GET_USER':
            return {
                ...state,
                loading: false,
                user: action.payload,
            }
        case 'REFRSH_TOKEN':
            return {
                ...state,
                loading: false,
                token: action.payload,
            }
        case 'LOGIN_USER':
            return {
                ...state,
                loading: false,
                user: [...state.user, action.payload],
            }
        case 'REGISTER_USER':
            return {
                ...state,
                loading: false,
                user: action.payload
            }
        case 'USER_ERROR':
            return {
                ...state,
                error: action.payload
            }
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
        case 'CATEGORIES_ERROR':
            return {
                ...state,
                error: action.payload
            }
        case 'GET_TRANSACTIONS':
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
                transactions: [...state.transactions, action.payload]
            }
        default:
            return state;
    }
}