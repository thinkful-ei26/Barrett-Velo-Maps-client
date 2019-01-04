import React from 'react';

import MyBikeMapComponent from './bike-map';
import RouteDecription from './route-desc';
import NewRouteForm from './create-routes-form';
import RouteList from './route-list';
import AddRouteButton from './add-route-button';

export default function App(props) {
  return(
  	<main role="main">
			<section>
				<MyBikeMapComponent 
					googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDM_ehj1epOAaYbWLgIG2vWT4ErYl-2PJg&v=3.exp&libraries=geometry,drawing,places"
					loadingElement={<div style={{ height: `100%` }} />}
					containerElement={<div style={{ height: `400px` }} />}
					mapElement={<div style={{ height: `100%` }} />}
				/>
			</section>
      
			<section className="add-route-button">
				<AddRouteButton />
			</section>

			<div className="flex-container">
				<section className="route-description">
					<RouteDecription />
				</section>

				<section className="route-list">
					<RouteList />
				</section>
			</div>
      
    </main>        
    )
}