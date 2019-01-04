import { API_BASE_URL } from '../config';
import { SubmissionError } from 'redux-form';
import { fetchRoutes } from './get-routes';

export const SAVE_NEW_ROUTE_PATH = 'SAVE_NEW_ROUTE_PATH';
export const saveNewRoutePath = (path) => ({
  type: SAVE_NEW_ROUTE_PATH,
  path
})

export const CREATING_ROUTE = 'CREATING_ROUTE';
export const creatingRoute = () => ({
    type: CREATING_ROUTE
});

export const DONE_CREATING_ROUTE = 'DONE_CREATING_ROUTE';
export const doneCreatingRoute = () => ({
    type: DONE_CREATING_ROUTE
});


// might need some work
export const saveRoute = (route) => dispatch => {
	return fetch(`${API_BASE_URL}/api/routes`, {
		method: 'POST',
		body: JSON.stringify(route),
		headers: {
			'Content-Type': 'application/json'
		}
})
	.then(res => {
		if (!res.ok) {
			if (
				res.headers.has('content-type') &&
				res.headers
					.get('content-type')
					.startsWith('application/json')
				) {
						// It's a nice JSON error returned by us, so decode it
						return res.json().then(err => Promise.reject(err));
					}
						// It's a less informative error returned by express
						return Promise.reject({
								code: res.status,
								message: res.statusText
					});
		}
		return res.json();
	})
		.then((res) => dispatch(fetchRoutes()))
		.catch(err => {
			console.log('made it to catch');
				const {reason, message, location} = err;
				if (reason === 'ValidationError') {
						// Convert ValidationErrors into SubmissionErrors for Redux Form
						return Promise.reject(
								new SubmissionError({
										[location]: message
								})
						);
				}
				return Promise.reject(
						new SubmissionError({
								_error: 'Error saving route'
						})
				);
		});
}


