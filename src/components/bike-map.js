/* global google */ 
// Libraries
import React from 'react';
import { connect } from 'react-redux';
import Spinner from 'react-spinkit';
import { withGoogleMap, GoogleMap, withScriptjs, BicyclingLayer, Marker, Polyline  } from 'react-google-maps';
import DrawingManager from "react-google-maps/lib/components/drawing/DrawingManager";
// Actions
import { saveNewRoutePath } from '../actions/post-routes';
import { setCurrentCenter } from '../actions/set-currentCenter';
// Components

// styles
import '../styles/bike-map.css';




class MyBikeMapComponent extends React.Component {
	componentDidMount() {
		this.getCenter();
	}

	componentDidUpdate() {
		if (this.props.currentRoutePath) {
			this.focusOnRoute();
		}
	}
	// renderRouteLoadOrError() {
	// 	if (this.props.loading) {
	// 		return <Spinner spinnername="circle" fadeIn="none" />;
	// 	}

	// 	if (this.props.error) {
	// 			return <strong>{this.props.error}</strong>;
	// 	}
	// 	console.log(this.props.route);
	// }
	currentPolyline;
	onPolylineComplete = poly => {
		this.currentPolyline = poly;
		const polyArray = poly.getPath().getArray();
		let paths = [];
		polyArray.forEach(function(path){
			paths.push({lat: path.lat(), lng: path.lng()});
		});
		this.props.dispatch(saveNewRoutePath(paths));
	}

	removePolyline() {
		this.currentPolyline.setMap(null);
	}

	// Uses navigator.geolocation to get users location and set that as the maps center
	getCenter() {
		let center;
		const getPosition = function(options) {

			if (navigator.geolocation) {
				return new Promise(function (resolve, reject) {
					navigator.geolocation.getCurrentPosition(resolve, reject, options);
				});
			} else {
				this.props.dispatch(setCurrentCenter({ lat: 39.753998, lng: -105.001054 }));
			}
		}
		
		getPosition()
			.then((position) => {

				center = {
					lat: parseFloat(position.coords.latitude),
					lng: parseFloat(position.coords.longitude)
				}
				this.props.dispatch(setCurrentCenter(center));
			})
			.catch((err) => {
				console.error(err.message);
			});
	}

	focusOnRoute() {
		this.props.dispatch(setCurrentCenter(this.props.currentRoutePath[0]));
	}

	render() {
		// ---- TODO ---- refactor conditional rendering to functions later 
		// clear map if Polyline Component is rendered
		if (this.props.creatingRoute || !this.props.currentRoutePath) {
			return (
				<div className="map-container">
					<section >
						<GoogleMap
							ref={(map) => this._map = map} // allows access to google.maps.Map
							defaultZoom={13}
							center={this.props.currentCenter} // should set center to user location with geo-location
						>

							<BicyclingLayer autoUpdate />	

							<DrawingManager 
								onPolylineComplete={(polyline) => {
									this.onPolylineComplete(polyline);
								}}
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
					</section>
					
					<button className="clear-map-button"
						onClick={() => {
							if (this.currentPolyline) {
							this.removePolyline();
						}}}
					>
						Clear Map
					</button>
								
				</div>
			);
		}

		// not creating new route, hide form, show button
		if (!this.props.creatingRoute) {

			// clears polyline off map if it exists
			if (this.currentPolyline) {
				this.removePolyline();
			}
			
			return (
				<div className="map-container">
					<section>
						<GoogleMap
							ref={(map) => this._map = map} // allows access to google.maps.Map
							defaultZoom={13}
							center={this.props.currentCenter} // should set center to user location with geo-location
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
								path={this.props.currentRoutePath}
							/>

							<Marker position={this.props.currentRoutePath[0]}/>

							<Marker position={this.props.currentRoutePath[this.props.currentRoutePath.length - 1]}/>
		
							<DrawingManager 
								onPolylineComplete={(e) => {
									this.onPolylineComplete(e);
								}}
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
					</section>

					<button className="clear-map-button"
						onClick={() => {
							if (this.currentPolyline) {
							this.removePolyline();
						}}}
					>
						Clear Map
					</button>

				</div>
				
			)
		}
	}
}

const mapStateToProps = state => {
	return {
		// getRouter
		routes: state.get.routes,
		loading: state.get.loading,
		error: state.get.error,
		currentRoutePath: state.get.currentRoute.path,
		currentCenter: state.get.currentCenter,
		// postRouter
		creatingRoute: state.post.creatingRoute,
	}
}

export default connect(mapStateToProps)(withScriptjs(withGoogleMap(MyBikeMapComponent)));