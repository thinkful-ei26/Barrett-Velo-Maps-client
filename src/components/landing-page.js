import React from 'react';
import '../styles/landing-page.css';

export default function LandingPage() {
  return(
    <section className='how-to-container'>
      <h2 className="how-to-header">Welcome to Velo Maps! An app that makes it easy to plan your next bike ride.</h2>

      <p className="how-to-paragraph">
        On the map, the dark green lines represent dedicated bicycle paths, 
        the light green lines are streets with bike lanes, and the dotted green lines are 
        streets or paths considered safe for cyclists.
        On the top center of the map are your drawing tools, you can place markers on the map and draw lines 
        to highlight your desired route. 
        To draw lines click anywhere on the map to start a line, and click again to finish that section.
        Click a 3rd time to finish drawing.

        Click 'Create New Route' to get started! Saved routes will appear to the right, click 
        on a route to see it on the map!
      </p>
    </section>
  );
}