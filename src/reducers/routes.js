import { 
	FETCH_ROUTES_REQUEST, 
	FETCH_ROUTES_SUCCESS, 
	FETCH_ROUTES_ERROR,
  SET_CURRENT_ROUTE,
  CLEAR_CURRENT_ROUTE 
} from '../actions/get-routes';
import { SAVE_NEW_ROUTE_PATH, CREATING_ROUTE, DONE_CREATING_ROUTE } from '../actions/post-routes';
import { SET_CURRENT_CENTER } from '../actions/set-currentCenter';
import { SHOW_HELP, HIDE_HELP } from '../actions/landing-page';

const initialState = {
	routes: [],
	newRoute: {
		name: '',
		description: '',
	  path: []
	},
  currentRoute: {},
  currentCenter: { lat: 39.753998, lng: -105.001054 }, // Default set to Denver. Use to focus center on currentRoute
  loading: false,
  error: null,
  creatingRoute: false,
  showHelp: true, // true: render landing page, false: hide landing page, render help button
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
    
    // these 2 may need their own reducer later --- TODO ---
		if (action.type === SET_CURRENT_ROUTE) {
			return Object.assign({}, state, {
				currentRoute: action.route
			})
    }
    
    if (action.type === SET_CURRENT_CENTER) {
			return Object.assign({}, state, {
				currentCenter: action.crds
			})
    }

    if (action.type === SHOW_HELP) {
      return Object.assign({}, state, {
        showHelp: true
      })
    }

    if (action.type === HIDE_HELP) {
      return Object.assign({}, state, {
        showHelp: false
      })
    }

    if (action.type === CLEAR_CURRENT_ROUTE) {
      return Object.assign({}, state, {
        currentRoute: {}
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