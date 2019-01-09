import React from 'react';
import { connect } from 'react-redux';
import { clearCurrentRoute } from '../actions/get-routes';
import '../styles/route-description.css';

function RouteDecription(props) {
  if (props.creatingRoute || !props.route.name) {
      return ('');
  }
  return( 
       <section className="route-description-section">
          <h2>{props.route.name}</h2>
          <p className="route-description-par">{props.route.description}</p>
          <button 
            onClick={() => props.dispatch(clearCurrentRoute())}   
            className="close-desc-button"
          >X</button>
      </section>
  )
}

const mapStateToProps = state => {
  return {
			route: state.get.currentRoute,
			creatingRoute: state.post.creatingRoute
  }
}

export default connect(mapStateToProps)(RouteDecription);