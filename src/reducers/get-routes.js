import { 
    FETCH_ROUTES_REQUEST, 
    FETCH_ROUTES_SUCCESS, 
    FETCH_ROUTES_ERROR 
} from '../actions/get-routes';

const initialState = {
    route: [],
    loading: false,
    error: null
}

export function getRouteReducer(state=initialState, action) {
    if (action.type === FETCH_ROUTES_REQUEST) {
        // return {...state, loading: true}  --- shorthand. using Object.assign is easier to read
        return Object.assign({}, state, {
            loading: true
        })
    } else if (action.type === FETCH_ROUTES_SUCCESS) {
        return Object.assign({}, state, {
            route: [...action.routes],
            loading: false,
            error: null
        })
    }   else if (action.type === FETCH_ROUTES_ERROR) {
            return Object.assign({}, state, {
                loading: false,
                error: action.error
            })
    }
    return state;
}