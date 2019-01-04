import { 
	FETCH_ROUTES_REQUEST, 
	FETCH_ROUTES_SUCCESS, 
	FETCH_ROUTES_ERROR,
	SET_CURRENT_ROUTE 
} from '../actions/get-routes';
import { SAVE_NEW_ROUTE_PATH, CREATING_ROUTE, DONE_CREATING_ROUTE } from '../actions/post-routes';

// const initialState = {
//   route: {
//     name: '',
//     description: '',
//     path: []
//   },
//   loading: false,
//   error: null
// }
const initialState = {
	routes: [],
	newRoute: {
		name: '',
		description: '',
	  path: []
	},
	currentRoute: {},
  loading: false,
  error: null,
  creatingRoute: false
}

export function getRouteReducer(state=initialState, action) {
  if (action.type === FETCH_ROUTES_REQUEST) {
    // return {...state, loading: true}  --- shorthand. using Object.assign is easier to read
    return Object.assign({}, state, {
      loading: true
    })
  } else if (action.type === FETCH_ROUTES_SUCCESS) {
    	return Object.assign({}, state, {
      	routes: [...action.route],
        loading: false,
        error: null
      })
    } else if (action.type === FETCH_ROUTES_ERROR) {
        return Object.assign({}, state, {
          loading: false,
          error: action.error
        })
		}
		
		if (action.type === SET_CURRENT_ROUTE) {
			return Object.assign({}, state, {
				currentRoute: action.route
			})
		}
		
  return state;
}

export function postRouteReducer(state=initialState, action) {

  if (action.type === SAVE_NEW_ROUTE_PATH) {
  	return Object.assign({}, state, {
      newRoute: {
				name: state.newRoute.name,
				description: state.newRoute.description,
        path: action.path
      }
    })
  }

  if (action.type === CREATING_ROUTE) {
  	return Object.assign({}, state, {
      creatingRoute: true
    })
  }

  if (action.type === DONE_CREATING_ROUTE) {
  	return Object.assign({}, state, {
      creatingRoute: false
    })
  }
  
  return state;
}