import React from 'react';
import { connect } from 'react-redux';
import { showHelp, hideHelp } from '../actions/landing-page';
import '../styles/landing-page.css';

function LandingPage(props) {
  if (props.showHelp) {
    return(
      <section className='how-to-container'>
        <h2 className="how-to-header-main">Welcome to Velo Maps!</h2>
        <h3 className="how-to-header-2nd">An app that makes it easy to plan your next bike ride.</h3>
  
        <ul className="how-to-list">
  
          <li><h4 className="map-key-header">The Map:</h4></li>
  
          <ul className="map-key">
            <li>
              Dark green lines are dedicated bike paths. 
            </li>
  
            <li>
              Light green lines are streets with bike lanes. 
            </li>
              
            <li>
              Dotted green lines are streets considered safe for cyclists.
            </li>   
          </ul>
  
          <li><h4 className="draw-header">Drawing a Route:</h4></li>
  
          <ul className="draw-info">
            <li>
              In the box at the top center of the map you can choose 
              to place markers to represent start and end points of your route, 
              or draw lines to highlight the path your route will take. 
            </li>
  
            <li>
              To draw a line, click anywhere on the map to start the line, and click again to finish that section of the line.
              Click a 3rd time to stop drawing.
            </li>
          </ul>
  
          <li><h4 className="save-header">Make a Route!</h4></li>
  
          <ul className="save-info">
            <li>
              Click 'Create New Route', give it a name and description, draw on the map, and hit save!
            </li>
  
            <li>
              Saved routes will appear to the right, click 
              on a route to see it on the map!
            </li>
          </ul>
        </ul>
  
        <button 
          className="how-to-close-button"
          onClick={() => props.dispatch(hideHelp())}
        >X</button>
      </section>
    );
  }

  if (!props.showHelp) {
    return (
      <button 
        className="help-button"
        onClick={() => props.dispatch(showHelp())}
      >Help</button>
    )
  }
  
}

const mapStateToProps = state => {
  return {
    showHelp: state.get.showHelp
  }
}

export default connect(mapStateToProps)(LandingPage);