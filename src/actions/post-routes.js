import { API_BASE_URL } from '../config';

export const SAVE_NEW_ROUTE_PATH = 'SAVE_NEW_ROUTE_PATH';
export const saveNewRoutePath = (path) => ({
  type: SAVE_NEW_ROUTE_PATH,
  path
})

// might need some work
export const saveRoute = (route) => {
	return fetch('/api/routes', {
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
				return;
		})
		.then(() => console.log('Submitted with values', route))
		.catch(err => {
				const {reason, message, location} = err;
				if (reason === 'ValidationError') {
						// Convert ValidationErrors into SubmissionErrors for Redux Form
						return Promise.reject(
								new Error({
										[location]: message
								})
						);
				}
				return Promise.reject(
						new Error({
								_error: 'Error saving route'
						})
				);
		});
}


