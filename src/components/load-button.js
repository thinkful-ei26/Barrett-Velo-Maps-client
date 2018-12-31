import React from 'react';
import { connect } from 'react-redux';
import { fetchRoutes } from '../actions/get-routes';

function LoadButton(props) {
		
	return (
		<button onClick={() => props.dispatch(fetchRoutes())}>{props.name}</button>
	)
} 

const mapStateToProps = state => {
	return {
		route: state.route,
		loading: state.loading,
		error: state.error
	}
}

export default connect(mapStateToProps)(LoadButton); 