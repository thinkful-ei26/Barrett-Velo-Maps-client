import React from 'react';
import { connect }  from 'react-redux';
import { creatingRoute } from '../actions/post-routes';

class AddRouteButton extends React.Component {

	render() {
		// if (this.props.creatingRoute) {
		// 	return null;
		// }

		return (
			<button onClick={() => this.props.dispatch(creatingRoute())}>
				Create New Route
			</button>
		);
	}
}

const mapStateToProps = state => {
	return {
		creatingRoute: state.post.creatingRoute
	}
}

export default connect(mapStateToProps)(AddRouteButton); 