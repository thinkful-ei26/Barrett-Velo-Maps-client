import { API_BASE_URL } from '../config';

export const FETCH_ROUTES_REQUEST = 'FETCH_ROUTES_REQUEST';
export const fetchRoutesRequest = () => ({
    type: FETCH_ROUTES_REQUEST
});

export const FETCH_ROUTES_SUCCESS = 'FETCH_ROUTES_SUCCESS';
export const fetchRoutesSuccess = (route) => ({
    type: FETCH_ROUTES_SUCCESS,
    route
});

export const FETCH_ROUTES_ERROR = 'FETCH_ROUTES_ERROR';
export const fetchRoutesError = error => ({
    type: FETCH_ROUTES_ERROR,
    error
});

// async action: dispatches async request, handles success or err actions
export const fetchRoutes = () => dispatch => {
    dispatch(fetchRoutesRequest());
    return fetch(`${API_BASE_URL}/api/routes`)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        }).then(routes => dispatch(fetchRoutesSuccess(routes))
        ).catch(err => dispatch(fetchRoutesError(err))
        );
}
export const SET_CURRENT_ROUTE = 'SET_CURRENT_ROUTE';
export const setCurrentRoute = route => ({
    type: SET_CURRENT_ROUTE,
    route
});