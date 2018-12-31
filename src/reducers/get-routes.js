import { 
    FETCH_ROUTES_REQUEST, 
    FETCH_ROUTES_SUCCESS, 
    FETCH_ROUTES_ERROR 
} from '../actions/get-routes';

const initialState = {
    route: {
        name: '',
        description: '',
        path: []
    },
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
        console.log(action.route);
        return Object.assign({}, state, {
            route: {
                name: action.route[0].name,
                description: action.route[0].description,
                path: [...action.route[0].path]
            },
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