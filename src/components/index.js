import React from 'react';

import '../styles/app.css';
import MyBikeMapComponent from './bike-map';
import RouteDecription from './route-desc';
import RouteList from './route-list';
import AddRouteButton from './add-route-button';
import LandingPage from './landing-page';

export default function App(props) {
  return(
  	<main role="main">
			<div className="header">
				<header role="banner">Velo Maps</header>
			</div>
		

			<div className="flex-container">
				<MyBikeMapComponent 
					googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDM_ehj1epOAaYbWLgIG2vWT4ErYl-2PJg&v=3.exp&libraries=geometry,drawing,places"
					loadingElement={<div style={{ height: `100%` }} />}
					containerElement={<div style={{ height: `400px`, width: `70%` }} />}
					mapElement={<div style={{ height: `100%` }} />}
				/>

				<div className="saved-routes-container">
					<section className="route-list">
						<RouteList />
					</section>

					<section className="route-description">
						<RouteDecription />
					</section>
				</div>
			</div>

			{/* <div className="add-route-button">
				<AddRouteButton />
			</div> */}

			<div className="landing-page-container">
			<LandingPage />
			</div>
			
    </main>        
    )
}