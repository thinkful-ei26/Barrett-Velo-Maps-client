import React from 'react';
import { connect } from 'react-redux';
import '../styles/route-list.css';
import { fetchRoutes, setCurrentRoute } from '../actions/get-routes';

class RouteList extends React.Component {
	componentDidMount() {
		this.props.dispatch(fetchRoutes());
	}

	handleKeyDown(event) {
		
	}

	render() {
		const list = this.props.routes.map((route, index) => {
			if (route.name) {
				return (
					<li 
						role="button" 
						tabIndex="0"
						onClick={() => this.props.dispatch(setCurrentRoute(route))} key={index}
						onKeyDown={(event) => {
							if(event.key === 'Enter' || 'Space') {
							this.props.dispatch(setCurrentRoute(route))
						}}}	
					>
						{route.name}
					</li>
				)
			}
			return null;
		}
		
		);
		return (
			<section className="route-list-section">
				<h2 className="list-header">Saved Routes</h2>
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


