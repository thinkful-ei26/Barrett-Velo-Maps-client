import React from 'react';
import { connect }  from 'react-redux';
import { creatingRoute } from '../actions/post-routes';
import '../styles/add-route-button.css';
import NewRouteForm from './create-routes-form';

class AddRouteButton extends React.Component {

	render() {
		if (!this.props.creatingRoute) {
			return (
				<button 
					className="addButton"
					onClick={() => this.props.dispatch(creatingRoute())}
				>
					Create New Route
				</button>
			);
		}	

		else if (this.props.creatingRoute) {
			return (
				<NewRouteForm />
			);
		}

		
	}
}

const mapStateToProps = state => {
	return {
		creatingRoute: state.post.creatingRoute
	}
}

export default connect(mapStateToProps)(AddRouteButton); 