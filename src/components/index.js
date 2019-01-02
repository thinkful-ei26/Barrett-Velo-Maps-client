import React from 'react';

import MyBikeMapComponent from './bike-map';
import LoadButton from './load-button';
import RouteDecription from './route-desc';
import NewRouteForm from './create-routes-form';

export default function App(props) {
  return(
  	<main>
      <MyBikeMapComponent 
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDM_ehj1epOAaYbWLgIG2vWT4ErYl-2PJg&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
			<section className="route-description">
				<RouteDecription 
					routeName={'Test Route'}
					routeDescription={'This is a fun ride!'}
				/>
			</section>

			<section className="button-section">
				<LoadButton name={'Load Route'} />
			</section>

			<section>
				<NewRouteForm />
			</section>
      
    </main>        
    )
}