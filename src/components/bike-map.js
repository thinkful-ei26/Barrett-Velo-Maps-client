/* global google */ 
import React from 'react';
import { connect } from 'react-redux';
import Spinner from 'react-spinkit';
import { withGoogleMap, GoogleMap, withScriptjs, BicyclingLayer, Marker, Polyline  } from 'react-google-maps';
import DrawingManager from "react-google-maps/lib/components/drawing/DrawingManager";
import { fetchRoutes } from '../actions/get-routes';


class MyBikeMapComponent extends React.Component {
	componentDidMount() {
		// render map so I can rerender with route cleared
	}

	

	renderRouteLoadOrError() {
		if (this.props.loading) {
			return <Spinner spinnername="circle" fadeIn="none" />;
		}

		if (this.props.error) {
				return <strong>{this.props.error}</strong>;
		}
		console.log(this.props.route);
	}

	render() {
		return (
			<section>
				<GoogleMap
          ref={(map) => this._map = map} // allows access to google.maps.Map
          defaultZoom={13}
          defaultCenter={{ lat: 39.753998, lng: -105.001054 }} // set to Denver, later set up geolocation as bonus
        >
          <BicyclingLayer autoUpdate />

					<Polyline 
            defaultOptions={{
              strokeColor: `#0000ff`,
              strokeOpacity: 1,
              strokeWeight: 5,
              clickable: true,
              editable: false, // set up condition to set this to true when user editing route -- extension feature
              zIndex: 1,
            }}   
            path={this.props.route}
          />

					<DrawingManager 
					// 	onPolylineComplete={(e) => {
					// 		this.onPolylineComplete(e);
					// }}
						defaultDrawingMode={google.maps.drawing.OverlayType.POLYLINE}
						defaultOptions={{
							drawingControl: true,
							drawingControlOptions: {
								position: google.maps.ControlPosition.TOP_CENTER,
								drawingModes: [
									google.maps.drawing.OverlayType.POLYLINE,
									google.maps.drawing.OverlayType.MARKER
								],
							},
							polylineOptions: {
								strokeColor: `#0000ff`,
								strokeOpacity: 1,
								strokeWeight: 5,
								clickable: true,
								editable: true,
								zIndex: 1,
							},
						}}
					/>

				</GoogleMap>

				<div>
					{this.renderRouteLoadOrError()}
				</div>
				

			</section>
		)
	}
}

const mapStateToProps = state => {
	return {
		route: state.route,
		loading: state.loading,
		error: state.error
	}
}

export default connect(mapStateToProps)(withScriptjs(withGoogleMap(MyBikeMapComponent)));