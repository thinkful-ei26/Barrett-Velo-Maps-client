import React from 'react';
import { connect } from 'react-redux';
import { fetchRoutes, setCurrentRoute } from '../actions/get-routes';

class RouteList extends React.Component {
	componentDidMount() {
		this.props.dispatch(fetchRoutes());
	}

	// this updated the list after new route post, but its constantly making get requests...
	// componentDidUpdate() {
	// 	this.props.dispatch(fetchRoutes());
	// }

	render() {
		const list = this.props.routes.map((route, index) => {
			if (route.name) {
				return <li onClick={() => this.props.dispatch(setCurrentRoute(route))} key={index}>
					{route.name}
				</li>
			}
			return null;
		}
		
		);
		return (
			<section>
				<h4>Saved Routes</h4>
				<ul className="route-list">
				{list}
			</ul>
			</section>
			
		);
	}
  
}

const mapStateToProps = state => {
	return {
		routes: state.get.routes
	}
}

export default connect(mapStateToProps)(RouteList); 


