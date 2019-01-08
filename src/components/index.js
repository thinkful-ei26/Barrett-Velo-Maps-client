import React from 'react';

import '../styles/app.css';
import MyBikeMapComponent from './bike-map';
import RouteDecription from './route-desc';
import RouteList from './route-list';
import AddRouteButton from './add-route-button';
import LandingPage from './landing-page';
// use article or aside
export default function App(props) {
  return(
  	<main>

			<header className="header">
				<h1 className="header-text">Velo Maps</h1>
			</header>
		
			<div className="landing-page-container">
				<LandingPage />
			</div>

			<div className="mapBox" role="presentation" aria-label="google map with highlited bike routes">
					<MyBikeMapComponent 
						googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDM_ehj1epOAaYbWLgIG2vWT4ErYl-2PJg&v=3.exp&libraries=geometry,drawing,places"
						loadingElement={<div style={{ height: `100%` }} />}
						containerElement={<div style={{ height: `400px`, width: `100%` }} />}
						mapElement={<div style={{ height: `100%` }} />}
					/>
			</div>

			<div className="addRouteButton">
				<AddRouteButton />
			</div>

			<div className="saved-routes-container">
				<div className="route-description">
						<RouteDecription />
				</div>

				<div className="route-list">
						<RouteList />
				</div>
			</div>
			
			
    </main>        
    )
}